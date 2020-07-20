import React from 'react'
import Links from './navbar/Links'
import './footer.scss'

export type Props = {}

export const Footer: React.FC<Props> = ({ }) => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="columns is-vcentered is-full-width has-text-centered is-hidden-mobile">
                        <Links linkClassName="footer-item" />
                    </div>
                    <div className="content has-text-centered is-uppercase">
                        Info@divritenis.lv | +371 20202020 <br />
                        Latvijas Riteņbraucēju apvienības oficiāla mājaslapa 2020
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer