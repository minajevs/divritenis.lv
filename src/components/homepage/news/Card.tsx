import React from 'react'

export type Props = {
    title: string
}

export const Card: React.FC<Props> = ({ title }) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-2by1">
                    <img src="https://via.placeholder.com/256x128.png" alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <p className="card-header-title">
                    {title}
                </p>
                <div className="content">
                    <div className="excerpt">
                        Latvijā pēdējā gada laikā ar velosipēdu pārvietojušies 35% iedzīvotāju, savukārt ikdienas braucēji ir 6% - tā liecina pēc
                    </div>
                    <div className="read-more-link">
                        <a className="has-text-weight-semibold">Lasīt vairāk</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card