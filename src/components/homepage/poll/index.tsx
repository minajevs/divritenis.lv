import React from 'react'

import { usePoll } from './usePolls'
import Voting from './Voting'
import Results from './Results'

import './poll.scss'

const PollCard: React.FC<{ title: string }> = ({ title, children }) => (
    <div className="card poll">
        <div className="card-content">
            <p className="poll-title has-text-centered has-text-weight-semibold">{title}</p>
            {children}
        </div>
    </div>
)

export const Poll: React.FC = () => {
    const [poll, vote] = usePoll()

    if (poll === null) return null

    if (poll.answered)
        return (
            <PollCard title={poll.title}>
                <Results options={poll.options} total={poll.results!.total} votes={poll.results!.votes} />
            </PollCard>
        )

    return (
        <PollCard title={poll.title}>
            <Voting options={poll.options} vote={vote} />
        </PollCard>
    )
}

export default Poll