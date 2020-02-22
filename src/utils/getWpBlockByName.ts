import { Wordpress__PageBlocks, Maybe } from "../../graphql-types"

const getWpBlockByName = (name: string, blocks: (Wordpress__PageBlocks | null)[] | null) => {
    if (blocks === null) return null

    const block = blocks.find(x => x === null ? false : x.blockName === name)
    return block === undefined
        ? null
        : block
}

export default getWpBlockByName