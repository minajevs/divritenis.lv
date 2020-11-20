import { useEffect, useState, useCallback } from 'react'
import { tryParse, random } from 'src/utils/helpers'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

type WpPollTag = {
  basetype: 'radio' | string
  labels: string[]
  name: string
}

type WpPollResults = {
  form_value: string
}

type WpPoll = {
  id: number
  title: string
  tags: WpPollTag[]
}

type PollResults = {
  total: number
  votes: number[] //number of votes for any given option
}

type Poll = {
  id: number
  title: string
  options: string[]
  answered: boolean
  results: PollResults | null
}

// local storage key
const answeredPollsKey = 'answeredPolls'

// check if user already answered poll
const userAnsweredPoll = (pollId: number) => {
  const item = window.localStorage.getItem(answeredPollsKey)

  const answeredPolls = JSON.parse(item || '[]') as number[]

  return answeredPolls.includes(pollId)
}

// save answered poll to local storage
const setUserAnsweredPoll = (pollId: number) => {
  const item = window.localStorage.getItem(answeredPollsKey)
  const answeredPolls = JSON.parse(item || '[]') as number[]

  answeredPolls.push(pollId)

  window.localStorage.setItem(answeredPollsKey, JSON.stringify(answeredPolls))
}

const getPollAnswers = (pollId: number) =>
  fetch(`${process.env.GATSBY_WP_URL}}/wp-json/polls/v1/poll/${pollId}`)
    .then((response) => response.json())
    .then((data: WpPollResults[]) => {
      const result: PollResults = data.reduce(
        (prev, cur) => {
          // some splitting magic
          const index = tryParse<number>(
            cur.form_value.split(';')[4].split(':')[2]
          )
          if (index === null || isNaN(index)) return prev

          const { total, votes } = prev
          votes[index] = (votes[index] ?? 0) + 1

          return {
            total: total + 1,
            votes,
          }
        },
        {
          total: 0,
          votes: [],
        } as PollResults
      )

      return result
    })

const getPollOptions = (poll: WpPoll) => {
  const radioTag = poll.tags[0]

  if (
    radioTag === null ||
    radioTag.basetype !== 'radio' ||
    radioTag.name !== 'atbilde'
  )
    return null

  return radioTag.labels
}

// Load poll data and choose random one to display
const getData = async (
  setPoll: React.Dispatch<React.SetStateAction<Poll | null>>
) => {
  try {
    // HTTP GET WP api to get all polls
    const response = await fetch(
      `${process.env.GATSBY_WP_URL}/wp-json/contact-form-7/v1/contact-forms`
    )
    const data: WpPoll[] = await response.json()

    // No polls => do nothing
    if (data.length === 0) return

    // Get random poll
    const randomPoll = data[random(0, data.length - 1)]

    // Check if user already answered this poll
    const answered = userAnsweredPoll(randomPoll.id)

    // If user answered - load poll results
    const results = answered ? await getPollAnswers(randomPoll.id) : null

    // Parse poll answer options
    const options = getPollOptions(randomPoll)
    if (options === null) return

    setPoll({
      id: randomPoll.id,
      title: randomPoll.title,
      options,
      answered,
      results,
    })
  } catch (err) {
    console.error(`Error happened when loading polls: ${err}`)
  }
}

type VoteResult = {
  status: string
}

// Send user vote to API
const sendVote = async (pollId: number, vote: string, captchaToken: string) => {
  // prepare multipart request, because that's what API expects
  const formData = new FormData()
  formData.append('atbilde', vote)
  formData.append('g-recaptcha-response', captchaToken)

  // HTTP POST vote request
  const response = await fetch(
    `${process.env.GATSBY_WP_URL}/wp-json/contact-form-7/v1/contact-forms/${pollId}/feedback`,
    {
      method: 'POST',
      body: formData,
    }
  )

  const data: VoteResult = await response.json()

  // success response has { status: 'mail_sent' }
  if (data.status === 'mail_sent') return true

  return false
}

// Poll hook
export const usePoll = () => {
  const [poll, setPoll] = useState<Poll | null>(null)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const vote = useCallback(
    async (vote: string) => {
      if (poll === null) return
      if (userAnsweredPoll(poll.id)) return
      if (executeRecaptcha === undefined) return

      // verify recaptcha
      const token = await executeRecaptcha('contactform')

      // send vote to API
      const voteSuccess = await sendVote(poll.id, vote, token)

      // if everythings good - save that user answered poll
      if (voteSuccess) setUserAnsweredPoll(poll.id)

      const results = await getPollAnswers(poll.id)

      // show results to user
      setPoll((prev) => ({
        ...prev!,
        answered: true,
        results,
      }))
    },
    [poll, setPoll, executeRecaptcha]
  )

  useEffect(() => {
    getData(setPoll)
  }, [])

  return [poll, vote] as const
}
