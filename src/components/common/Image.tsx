import React from 'react'

export type Props = {
  alt: string
  src: string
  className?: string
}

export const Image: React.FC<Props> = ({ alt, src, className = '' }) => {
  return (
    <figure className={`image ${className}`}>
      <img src={src} alt={alt} />
    </figure>
  )
}

export default Image
