import React from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

type Testimonial = {
  quote: string,
  author: string
}

type Props = {
  testimonials: Testimonial[]
}

const Testimonials: React.FC<Props> = ({ testimonials }) => (
  <div>
    {testimonials.map(testimonial => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
)

export default Testimonials
