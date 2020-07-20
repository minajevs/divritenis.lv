import React from 'react'
import Links from './navbar/Links'
import './footer.scss'

export type Props = {}

export const Footer: React.FC<Props> = ({ }) => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns">
                        <div className="column">
                            <div className="content has-text-centered">
                                Info@divritenis.lv | +371 20202020 <br />
                                    Latvijas Riteņbraucēju apvienības oficiāla mājaslapa 2020
                            </div>
                        </div>
                        <div className="column">
                            <div className="columns is-vcentered is-full-width has-text-centered">
                                <Links linkClassName="footer-item" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer