import React from 'react'
import { WpLazyblockInfocardBlock } from 'autogenerated/graphql-types'
import Infocard from '../infocard/Infocard'
import './infocard.scss'

export type Props = {
  blocks: (WpLazyblockInfocardBlock | null)[] | null
}

export const InfocardList: React.FC<Props> = ({ blocks }) => {
  if (blocks === null) return null
  return (
    <div className="columns has-text-centered is-multiline infocard-list">
      {blocks?.map((block, i) => {
        if (block === null) return null
        const { attributes } = block

        return (
          <div className="column is-half" key={i}>
            <Infocard
              title={attributes?.title ?? ''}
              text={attributes?.text ?? ''}
              img={JSON.parse(decodeURI(attributes?.image ?? ''))['url']}
              infoUrl={attributes?.url ?? ''}
            />
          </div>
        )
      })}
    </div>
  )
}

export default InfocardList
