import {FILL_TILE, SELECT_TILE} from "../actions/actionTypes";

const initialState = {
    rows: [
        [2, 5, 0, 0, 0, 1, 0, 0, 0],
        [0, 7, 9, 0, 9, 0, 5, 0, 0],
        [0, 0, 0, 0, 0, 0, 7, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 7, 0],
        [3, 0, 0, 8, 5, 2, 0, 0, 1],
        [0, 6, 0, 0, 0, 0, 0, 0, 0],
        [9, 0, 6, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 2, 0, 6, 8, 0],
        [0, 0, 0, 9, 0, 0, 0, 3, 5],
    ],
    columns: [
        [2, 0, 0, 0, 3, 0, 9, 0, 0],
        [5, 7, 0, 0, 0, 6, 0, 0, 0],
        [0, 9, 0, 0, 0, 0, 6, 1, 0],
        [0, 0, 0, 0, 8, 0, 0, 0, 9],
        [0, 9, 0, 0, 5, 0, 0, 2, 0],
        [1, 0, 0, 0, 2, 0, 0, 0, 0],
        [0, 5, 7, 0, 0, 0, 0, 6, 0],
        [0, 0, 0, 7, 0, 0, 0, 8, 3],
        [0, 0, 2, 0, 1, 0, 0, 0, 5],
    ],
    blocks: [
        [2, 5, 0, 0, 7, 9, 0, 0, 0],
        [0, 0, 1, 0, 3, 0, 0, 0, 0],
        [0, 0, 0, 5, 0, 0, 7, 0, 2],
        [0, 0, 0, 3, 0, 0, 0, 6, 0],
        [0, 0, 0, 8, 5, 2, 0, 0, 0],
        [0, 7, 0, 0, 0, 1, 0, 0, 0],
        [9, 0, 6, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 9, 0, 0],
        [0, 0, 0, 6, 8, 0, 0, 3, 5],
    ],
    highlightedRow: null,
    highlightedColumn: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FILL_TILE: {
            const {row, column, content} = action.payload
            state.rows[row][column] = content
            state.columns[column][row] = content
            let blockIndex = Math.floor(row / 3) + Math.floor(column / 3) * 3
            let blockContentIndex = row % 3 + (column % 3) * 3
            state.blocks[blockIndex][blockContentIndex] = content
            return state
        }
        case SELECT_TILE: {
            const {row, column} = action.payload
            return {
                ...state,
                highlightedRow: row,
                highlightedColumn: column
            };
        }
        default:
            return state;
    }
}