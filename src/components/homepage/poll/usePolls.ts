import { useEffect, useState, useCallback } from "react"

type WpPollTag = {
    basetype: 'checkbox' | string
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

const answeredPollsKey = 'answeredPolls'

const userAnsweredPoll = (pollId: number) => {
    const item = window.localStorage.getItem(answeredPollsKey)

    const answeredPolls = JSON.parse(item || '[]') as number[]

    return answeredPolls.includes(pollId)
}

const setUserAnsweredPoll = (pollId: number) => {
    const item = window.localStorage.getItem(answeredPollsKey)
    const answeredPolls = JSON.parse(item || '[]') as number[]

    answeredPolls.push(pollId)

    window.localStorage.setItem(answeredPollsKey, JSON.stringify(answeredPolls))
}

const tryParse = <T>(value: string) => {
    try {
        return JSON.parse(value) as T
    } catch {
        return null
    }
}

const random = (min: number, max: number) => (Math.random() * (max - min + 1)) << 0

const getPollAnswers = (pollId: number) =>
    fetch(`${process.env.GATSBY_WP_URL}/wp-json/polls/v1/poll/${pollId}`)
        .then(response => response.json())
        .then((data: WpPollResults[]) => {
            console.log(data)
            const result: PollResults = data.reduce((prev, cur) => {
                // some splitting magic
                const index = tryParse<number>(cur.form_value.split(';')[4].split(':')[2])
                if (index === null || isNaN(index)) return prev

                const { total, votes } = prev
                votes[index] = (votes[index] ?? 0) + 1

                return {
                    total: total + 1,
                    votes
                }
            }, {
                total: 0,
                votes: []
            } as PollResults)

            return result
        })

const getPollOptions = (poll: WpPoll) => {
    const radioTag = poll.tags[0]

    if (radioTag === null || radioTag.basetype !== 'radio' || radioTag.name !== 'atbilde') return null

    return radioTag.labels
}

const getData = async (setPoll: React.Dispatch<React.SetStateAction<Poll | null>>) => {
    try {
        const response = await fetch(`${process.env.GATSBY_WP_URL}/wp-json/contact-form-7/v1/contact-forms`)
        const data: WpPoll[] = await response.json()

        if (data.length === 0) return

        const randomPollIndex = random(0, data.length - 1)
        const randomPoll = data[randomPollIndex]

        const answered = userAnsweredPoll(randomPoll.id)

        const results = answered ? await getPollAnswers(randomPoll.id) : null

        const options = getPollOptions(randomPoll)

        if (options === null) return

        setPoll({
            id: randomPoll.id,
            title: randomPoll.title,
            options,
            answered,
            results
        })
    } catch (err) {
        console.error(`Error happened when loading polls: ${err}`)
    }
}

type VoteResult = {
    status: string
}

const sendVote = async (pollId: number, vote: string) => {
    const formData = new FormData()
    formData.append('atbilde', vote)

    const response = await fetch(`${process.env.GATSBY_WP_URL}/wp-json/contact-form-7/v1/contact-forms/${pollId}/feedback`, {
        method: 'POST',
        body: formData
    })

    const data: VoteResult = await response.json()

    if (data.status === 'mail_sent') return true

    return false
}

export const usePoll = () => {
    const [poll, setPoll] = useState<Poll | null>(null)

    const vote = useCallback((vote: string) => {
        if (poll === null) return
        if (userAnsweredPoll(poll.id)) return

        sendVote(poll.id, vote)
            .then(success => {
                if (success)
                    setUserAnsweredPoll(poll.id)

                return getPollAnswers(poll.id)
            })
            .then(results => setPoll(prev => ({
                ...prev!,
                answered: true,
                results
            })))
    }, [poll, setPoll])

    useEffect(() => {
        getData(setPoll)
    }, [])

    return [poll, vote] as const
}