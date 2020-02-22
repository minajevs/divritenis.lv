import React from 'react'

export type Props = {
    alt: string,
    url: string,
    className?: string
}

export const Image: React.FC<Props> = ({ alt, url, className = "" }) => {
    return (
        <figure className={`image ${className}`}>
            <img src={url} alt={alt} />
        </figure>
    )
}

export default Image