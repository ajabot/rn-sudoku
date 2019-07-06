export const getBlock = (store, blockId) => {
    return store.blocks[blockId]
}

export const getBlockContentCounter = (store, blockId) => {
    return store.blocksNumberCounter[blockId]
}