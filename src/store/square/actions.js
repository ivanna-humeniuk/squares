import types from "./types";
import { url } from "../../api/config";
import { uiActions } from "../ui";

export const actions = Object.freeze({

    setActiveMode: (payload) => {
        return {
            type: types.SET_ACTIVE_MODE,
            payload
        }
    },

    setModes: (payload) => {
        return {
            type: types.SET_MODES,
            payload
        }
    },

    startActiveMode: (payload) => {
        return {
            type: types.START_ACTIVE_MODE,
            payload
        }
    },

    setHoverSquares: (payload) => {
        return {
            type: types.SET_HOVER_SQUARE,
            payload
        }
    },

    removeHoverSquares: (payload) => {
        return {
            type: types.REMOVE_HOVER_SQUARE,
            payload
        }
    },

    removeAllSquares: (payload) => {
        return {
            type: types.REMOVE_SQUARES,
            payload
        }
    },

    getModes: () => {
        return dispatch => {
            dispatch(uiActions.startFetching());
            fetch(`${url}`)
                .then((response) => {
                    if (response.status !== 200) {
                        dispatch(uiActions.stopFetching());
                        dispatch(uiActions.setFetchingError());
                    }
                    return response.json();
                }).then((response) => {
                let data = Object.keys(response).map((mode) => {
                    return {
                        mode: mode,
                        field: response[mode].field
                    }
                })
                dispatch(uiActions.stopFetching());
                dispatch(actions.setModes(data));
            }).catch(() => {
                dispatch(uiActions.stopFetching());
                dispatch(uiActions.setFetchingError());
            });
        }
    },
})