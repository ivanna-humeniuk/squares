import types from "./types";

const initialState = {
    modes: [{
        mode: 'Pick mode',
        field: 0,
        disabled: true
    }],
    activeMode: 0,
    hoverSquares: [],
    isStart: false,
}

export const squaresReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_MODES:
            return {
                ...state,
                modes: state.modes.concat(action.payload)
            }
        case types.SET_ACTIVE_MODE:
            return {
                ...state,
                activeMode: action.payload,
                isStart: false
            }
        case types.START_ACTIVE_MODE:
            return {
                ...state,
                isStart: true
            }
        case types.SET_HOVER_SQUARE:

            return {
                ...state,
                hoverSquares: state.hoverSquares.concat(action.payload)
            }

        case types.REMOVE_HOVER_SQUARE:

            const squares = state.hoverSquares.filter((n) => {
                    return n !== action.payload
                }
            )

            return {
                ...state,
                hoverSquares: squares
            }
        case types.REMOVE_SQUARES:
            return {
                ...state,
                hoverSquares: []
            }
        default:
            return state;
    }
}