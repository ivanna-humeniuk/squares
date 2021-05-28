import types from "./types";

export const uiActions = Object.freeze({
    startFetching: () => {
        return {
            type: types.UI_START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.UI_STOP_FETCHING,
        };
    },
    setFetchingError: (payload) => {
        return {
            type: types.UI_SET_FETCHING_ERROR,
            payload
        };
    },
});
