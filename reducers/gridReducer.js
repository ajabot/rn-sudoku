import {FILL_TILE, SELECT_TILE} from "../actions/actionTypes";

const initialState = {
    rows: [
        [2, 5, 0, 0, 0, 1, 0, 0, 0],
        [0, 7, 9, 0, 3, 0, 5, 0, 0],
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
        [0, 3, 0, 0, 5, 0, 0, 2, 0],
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
    columnsNumberCounter: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    rowsNumberCounter: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ],
    blocksNumberCounter: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]
};

const countNumbers = (numbers) => {
    numberCounter = []
    for (i = 0; i < numbers.length; i++) {
        let  group = []
        for (j = 1; j <= 9; j++) {
            group.push(numbers[i].reduce((n, x) => n + (x === j), 0))
        }
        numberCounter.push(group)
    }

    return numberCounter
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FILL_TILE: {
            const {row, column, content} = action.payload
            if (row === null || column === null || content === null) {
                return state
            }

            state.rows[row][column] = content
            state.columns[column][row] = content
            let blockIndex = Math.floor(column / 3) + Math.floor(row / 3) * 3
            let blockContentIndex = column % 3 + (row % 3) * 3
            state.blocks[blockIndex][blockContentIndex] = content

            state.rowsNumberCounter = countNumbers(state.rows)
            state.columnsNumberCounter = countNumbers(state.columns)
            state.blocksNumberCounter = countNumbers(state.blocks)

            return {
                ...state
            }
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