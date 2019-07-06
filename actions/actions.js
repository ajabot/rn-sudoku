import {FILL_TILE, SELECT_TILE, RESET_GRID} from "./actionTypes"

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

export const resetGrid = () => ({
    type: RESET_GRID
})