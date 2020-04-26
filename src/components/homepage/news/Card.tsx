import React from 'react'

import Img from 'gatsby-image'
import { GatsbyImageSharpFluid_WithWebpFragment } from '../../../../graphql-types'

export type Props = {
    title: string
    excerpt: string
    image: {
        img: GatsbyImageSharpFluid_WithWebpFragment
        alt: string
    }
    path: string
}

export const Card: React.FC<Props> = ({ title, excerpt, image, path }) => {
    return (
        <div className="card">
            <div className="card-image">
                <Img
                    className="image"
                    fluid={{
                        aspectRatio: image.img.aspectRatio,
                        sizes: image.img.sizes,
                        src: image.img.src,
                        srcSet: image.img.srcSet,
                        base64: image.img.base64 ?? undefined,
                        srcWebp: image.img.srcWebp ?? undefined,
                        srcSetWebp: image.img.srcSetWebp ?? undefined,
                    }} alt={image.alt} />
            </div>
            <div className="card-content">
                <p className="card-header-title">
                    {title}
                </p>
                <div className="content">
                    <div className="excerpt">
                        {excerpt}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <a className="has-text-weight-semibold" href={path}>Lasīt vairāk</a>
            </div>
        </div>
    )
}

export default Card