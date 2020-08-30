import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import './infocard.scss'

export type Props = {
  title: string
  text: string
  img: string
  infoUrl: string
}

export const Infocard: React.FC<Props> = ({ title, text, img, infoUrl }) => {
  return (
    <div className="card infocard" style={{ background: `url("${img}")` }}>
      <div className="card-header is-shadowless">
        <div className="title is-5 has-text-weight-medium">{title}</div>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="has-text-left">
            <div className="infocard-text">{text}</div>
            <GatsbyLink key={infoUrl} to={infoUrl}>
              <button className="button is-uppercase is-inverted">
                Lasīt vairāk
              </button>
            </GatsbyLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Infocard
