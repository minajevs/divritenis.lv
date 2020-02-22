import React from 'react'
import Image from '../common/Image'

export type LogoBlock = {
    alt: string,
    title: string,
    caption: string,
    link: string,
    url: string
}

export type Props = {
    logoAttr: string
}

const Logo: React.FC<Props> = ({ logoAttr }) => {
    const logoBlock = JSON.parse(decodeURI(logoAttr)) as LogoBlock | undefined

    if (logoBlock === undefined) return null

    return (
        <div className="container">
            <Image alt={logoBlock.alt} url={logoBlock.url} />
        </div>
    )
}

export default Logo