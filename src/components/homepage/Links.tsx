import React from 'react'

export type LinksBlock = LinkType[]

export type LinkType = {
    text: string,
    url: string
}

export type Props = {
    linksAttr: string
}

const Link: React.FC<LinkType> = (link) => {
    return (
        <div className="notification">
            <a href={link.url} className="is-uppercase has-text-weight-semibold">{link.text}</a>
        </div>    
    )
}

const Links: React.FC<Props> = ({ linksAttr }) => {
    const linksBlock = JSON.parse(decodeURI(linksAttr)) as LinksBlock | undefined

    if (linksBlock === undefined) return null

    return (
        <>
            <div className="columns">
                <div className="column">
                    <Link {...linksBlock[0]}/>
                </div>
                <div className="column">
                    <Link {...linksBlock[1]} />
                </div>
                <div className="column">
                    <Link {...linksBlock[2]} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <Link {...linksBlock[3]} />
                </div>
                <div className="column">
                    <Link {...linksBlock[4]} />
                </div>
                <div className="column">
                    <Link {...linksBlock[5]} />
                </div>
            </div>
        </>
    )
}

export default Links