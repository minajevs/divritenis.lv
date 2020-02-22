import React from 'react'

export type Link = {
    title: string,
    url: string
}

const Links: React.FC = () => {
    return (
        <>
        <div className="columns">
            <div className="column">
                Zinas
            </div>
            <div className="column">
                Noderigi
            </div>
            <div className="column">
                Dokumenti
            </div>
        </div>
        <div className="columns">
            <div className="column">
                Kalendars
                 </div>
            <div className="column">
                Drosiba
            </div>
            <div className="column">
                Apvieniba
            </div>
        </div>
        </>
    )
}

export default Links