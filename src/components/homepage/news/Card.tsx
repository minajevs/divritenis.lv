import React from 'react'

export type Props = {
    title: string
    excerpt: string
    image: {
        url: string
        alt: string
    }
    path: string
}

export const Card: React.FC<Props> = ({ title, excerpt, image, path }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src={image.url} alt={image.alt} />
                </figure>
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