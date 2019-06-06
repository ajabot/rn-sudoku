import {FILL_TILE, SELECT_TILE} from "./actionTypes"

export const fillTile = (row, column, content) => ({
    type: FILL_TILE,
    payload: {
        row: row,
        column: column,
        content: content
    }
})

export const selectTile = (row, column) => ({
    type: SELECT_TILE,
    payload: {
        row: row,
        column: column
    }
})