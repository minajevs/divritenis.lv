import React from 'react'

type ImgSizes = '16' | '24' | '32' | '48' | '64' | '96' | '128'

export type Props = {
    alt: string,
    url: string,
    size: ImgSizes | null
}

export const Image: React.FC<Props> = ({ alt, url, size = '128' }) => {
    return (
        <figure className={`image is-${size}x${size}`}>
            <img src="https://bulma.io/images/placeholders/256x256.png" />
        </figure>
    )
}

export default Image