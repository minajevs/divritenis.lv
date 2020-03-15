import React from 'react'
import './hero.scss'

export type Props = {
    text: string
    leftButtonText: string
    rightButtonText: string
}

export const Hero: React.FC<Props> = ({ text, leftButtonText, rightButtonText }) => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="columns is-vcentered">
                    <div className="column is-uppercase is-size-5 has-text-weight-semibold has-text-white">
                        {text}
                    </div>
                    <div className="column is-one-quarter">
                        <button className="button is-uppercase">{leftButtonText}</button>
                    </div>
                    <div className="column is-one-quarter">
                        <button className="button is-uppercase">{rightButtonText}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero