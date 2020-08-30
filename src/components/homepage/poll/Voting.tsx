import React, { useState, useCallback } from 'react'

export type Props = {
  options: string[]
  vote: (option: string) => void
}

export const Voting: React.FC<Props> = ({ options, vote }) => {
  const [selectedAnswer, selectAnswer] = useState(0)

  const onRadioChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      selectAnswer(+event.target.value),
    []
  )

  return (
    <>
      <div className="poll-options">
        {options.map((x, i) => (
          <div className="poll-option field" key={i} onChange={onRadioChange}>
            <input
              className="is-checkradio is-primary"
              type="radio"
              name="atbildes"
              id={`option-${i}`}
              value={i}
              defaultChecked={i === 0}
            />
            <label className="radio" key={i} htmlFor={`option-${i}`}>
              {x}
            </label>
          </div>
        ))}
      </div>
      <div className="poll-actions buttons is-centered">
        <button
          className="button is-primary"
          onClick={() => vote(selectedAnswer.toString())}
        >
          Balsot
        </button>
      </div>
    </>
  )
}

export default Voting
