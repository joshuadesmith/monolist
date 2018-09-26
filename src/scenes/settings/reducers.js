import {createReducer} from "../../common/utils/index";

export const REQUEST_SPOTIFY_AUTH_CODE = "REQUEST_SPOTIFY_AUTH_CODE";
export const REQUESTING_SPOTIFY_AUTH_CODE = "REQUESTING_SPOTIFY_AUTH_CODE";
export const REQUEST_SPOTIFY_AUTH_CODE_SUCCESS = "REQUEST_SPOTIFY_AUTH_CODE_SUCCESS";
export const REQUEST_SPOTIFY_AUTH_CODE_FAILURE = "REQUEST_SPOTIFY_AUTH_CODE_FAILURE";

const initialState = {
    isRequesting: false,
    spotify: {
        isLinked: false,
        authCode: "",
        authError: "",
    },
};

export default createReducer(initialState, {
    [REQUESTING_SPOTIFY_AUTH_CODE]: (state) => Object.assign({}, state, {
        isRequesting: true,
    }),
    [REQUEST_SPOTIFY_AUTH_CODE_SUCCESS]: (state, payload) => Object.assign({}, state, {
        isRequesting: false,
        spotify: {
            isLinked: true,
            authCode: payload.authCode,
            authError: "",
        },
    }),
    [REQUEST_SPOTIFY_AUTH_CODE_FAILURE]: (state, payload) => Object.assign({}, state, {
        isRequesting: false,
        spotify: {
            isLinked: false,
            authCode: "",
            authError: payload.error,
        },
    })
});