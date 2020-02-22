import React from 'react'

type ImgSizes = '16' | '24' | '32' | '48' | '64' | '96' | '128'

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