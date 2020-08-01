import React, { useState, useCallback } from 'react'

export type Props = {
  options: string[]
  votes: number[]
  total: number
}

const getVotes = (votes: number[], index: number) => votes[index] ?? 0

const getPluralAtbildes = (count: number) => {
  const countStr = count.toString()
  const lastDigit = +countStr.split('')[countStr.length - 1]
  if (lastDigit === 1) return 'atbilde'
  return 'atbildes'
}

export const Results: React.FC<Props> = ({ options, votes, total }) => {
  return (
    <>
      <div className="poll-results">
        {options.map((x, i) => (
          <div className="poll-result" key={i}>
            <label key={i} htmlFor={`result-${i}`}>
              {x} ({getVotes(votes, i)})
            </label>
            <progress
              className="progress is-primary"
              id={`result-${i}`}
              value={getVotes(votes, i)}
              max={total}
            >
              {getVotes(votes, i) / total}%
            </progress>
          </div>
        ))}
      </div>
      <div className="poll-total-result has-text-centered is-full-width">
        Kopā: {total} {getPluralAtbildes(total)}
      </div>
    </>
  )
}

export default Results
