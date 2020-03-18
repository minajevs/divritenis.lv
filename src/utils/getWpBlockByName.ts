import { Wordpress__PageBlocks, Maybe } from "../../graphql-types"

const getWpBlockByName = (name: string, blocks: (Wordpress__PageBlocks | null)[] | null) => {
    if (blocks === null) return null

    const block = blocks.find(x => x?.blockName === name)
    return block === undefined
        ? null
        : block
}

const getWpBlocksByName = (name: string, blocks: (Wordpress__PageBlocks | null)[] | null) => {
    if (blocks === null) return null

    return blocks.filter(x => x?.blockName === name)

}

export { getWpBlockByName, getWpBlocksByName }

