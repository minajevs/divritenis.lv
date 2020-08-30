import React from 'react'
import { format } from 'date-fns'

export type Props = {
  title: string
  image: {
    url: string
    alt: string
  }
  path: string
  date: Date
}

export const Card: React.FC<Props> = ({ title, image, path, date }) => {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image">
          <img src={image.url} alt={image.alt} />
        </div>
      </div>
      <div className="card-content">
        <p className="card-header-subtitle is-size-7 has-text-weight-bold has-text-grey">
          {format(date, 'dd.MM.yyyy')}
        </p>
        <p className="card-header-title">{title}</p>
      </div>
      <div className="card-footer">
        <a className="has-text-weight-semibold" href={path}>
          Lasīt vairāk
        </a>
      </div>
    </div>
  )
}

export default Card
