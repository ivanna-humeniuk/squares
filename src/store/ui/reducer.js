import types from "./types";

const initialState = {
    isFetching: false,
    isFetchError: false,
    error: "",
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UI_START_FETCHING:
            return {
                ...state,
                isFetching: true,
            };
        case types.UI_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
            };
        case types.UI_SET_FETCHING_ERROR:
            return {
                ...state,
                isFetchError: true,
                error: action.payload
            };
        default:
            return {
                ...state,
            };
    }
};
