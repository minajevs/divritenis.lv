import React from 'react'
import { Wordpress__PageBlocks } from '../../../../graphql-types'
import Infocard from '../infocard/Infocard'
import './infocard.scss'

export type Props = {
    blocks: (Wordpress__PageBlocks | null)[] | null
}

export const InfocardList: React.FC<Props> = ({ blocks }) => {
    if (blocks === null) return null
    return (
        <div className="columns has-text-centered is-multiline infocard-list">
            {blocks?.map((block, i) => {
                if (block === null) return null
                const { attrs } = block

                return (<div className="column is-half" key={i} >
                    <Infocard
                        title={attrs?.title ?? ""}
                        text={attrs?.text ?? ""}
                        img={JSON.parse(decodeURI(attrs?.image ?? ''))['url']}
                        infoUrl={attrs?.url ?? ""}
                    />
                </div>)
            })}
        </div>
    )
}

export default InfocardList