import React, { useEffect, useState, useCallback } from 'react'

import './poll.scss'
import { usePoll } from './usePolls'

export type Props = {}

const getPluralAtbildes = (count: number) => {
    const countStr = count.toString()
    const lastDigit = +countStr.split('')[countStr.length - 1]
    if (lastDigit === 1) return 'atbilde'
    return 'atbildes'
}

const PollCard: React.FC<{ title: string }> = ({ title, children }) => (
    <div className="card poll">
        <div className="card-content">
            <p className="poll-title has-text-centered has-text-weight-semibold has-text-white">{title}</p>
            {children}
        </div>
    </div>
)

export const Poll: React.FC<Props> = ({ }) => {
    const [poll, vote] = usePoll()
    const [selectedAnswer, selectAnswer] = useState(0)

    const onRadioChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => selectAnswer(+event.target.value), [])

    if (poll === null) return null

    // show results
    if (poll.answered) {
        const { total, votes } = poll.results!

        const getVotes = (index: number) => votes[index] ?? 0

        console.log(total, votes)
        return (
            <PollCard title={poll.title}>
                <div className="poll-results">
                    {poll.options.map((x, i) => (
                        <div className="poll-result" key={i}>
                            <label className="has-text-white" key={i} htmlFor={`result-${i}`}>
                                {x} ({getVotes(i)})
                        </label>
                            <progress className="progress is-primary"
                                id={`result-${i}`}
                                value={getVotes(i)}
                                max={total}
                            >
                                {getVotes(i) / total}%
                        </progress>
                        </div>
                    ))}
                </div>
                <div className="poll-total-result has-text-white has-text-centered is-full-width">
                    Kopā: {total} {getPluralAtbildes(total)}
                </div>
            </PollCard>
        )
    }

    return (
        <PollCard title={poll.title}>
            <div className="poll-options">
                {poll.options.map((x, i) => (
                    <div className="poll-option field" key={i} onChange={onRadioChange}>
                        <input className="is-checkradio is-primary" type="radio" name="atbildes"
                            id={`option-${i}`}
                            value={i} defaultChecked={i === 0} />
                        <label className="radio has-text-white" key={i} htmlFor={`option-${i}`}>
                            {x}
                        </label>
                    </div>
                ))}
            </div>
            <div className="poll-actions buttons is-right">
                <button className="button is-primary has-text-white is-right"
                    onClick={() => vote(selectedAnswer.toString())}>Balsot</button>
            </div>
        </PollCard>
    )
}

export default Poll