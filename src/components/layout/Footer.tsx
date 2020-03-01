import React from 'react'

export type Props = {}

export const Footer: React.FC<Props> = ({ }) => {
    return (
        <footer className="footer">
            <div className="content has-text-centered is-uppercase">
                Info@divritenis.lv | +371 20202020 <br />
                Latvijas Riteņbraucēju apvienības oficiāla mājaslapa 2020
            </div>
        </footer>
    )
}

export default Footer