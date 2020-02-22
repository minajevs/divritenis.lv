import React from 'react'

export type LinksBlock = {
    text: string,
    url: string
}[]

export type Link = {
    title: string,
    url: string
}

export type Props = {
    linksAttr: string
}

const Links: React.FC<Props> = ({ linksAttr }) => {
    const linksBlock = JSON.parse(decodeURI(linksAttr)) as LinksBlock | undefined

    if (linksBlock === undefined) return null

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