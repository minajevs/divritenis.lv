import React from 'react'

export type LinkType = {
    title: string,
    url: string
}

const Link: React.FC<LinkType> = (link) => {
    return (
        <a href={link.url} className="is-uppercase has-text-weight-semibold">{link.title}</a>
    )
}

const Links: React.FC = () => {
    const links: LinkType[] = [
        { title: 'test', url: 'url' },
        { title: 'test', url: 'url' },
        { title: 'test', url: 'url' },
        { title: 'test', url: 'url' },
        { title: 'test', url: 'url' },
        { title: 'test', url: 'url' },
    ]
    return (
        <>
            <div className="columns">
                <div className="column">
                    <Link title={links[0].title} url={links[0].url} />
                </div>
                <div className="column">
                    <Link title={links[1].title} url={links[1].url} />
                </div>
                <div className="column">
                    <Link title={links[2].title} url={links[2].url} />
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <Link title={links[3].title} url={links[3].url} />
                </div>
                <div className="column">
                    <Link title={links[4].title} url={links[4].url} />
                </div>
                <div className="column">
                    <Link title={links[5].title} url={links[5].url} />
                </div>
            </div>
        </>
    )
}

export default Links