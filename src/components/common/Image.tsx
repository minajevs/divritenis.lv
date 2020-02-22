import React from 'react'

export type Props = {
    alt: string,
    url: string
}

export const Image: React.FC<Props> = ({ alt, url }) => {
    return (
        <figure className={`image is-2by1`}>
            <img src={url} alt={alt} />
        </figure>
    )
}

export default Image