import {createReducer} from "../../common/utils/index";

export const REQUEST_SPOTIFY_AUTH_CODE = "REQUEST_SPOTIFY_AUTH_CODE";
export const REQUESTING_SPOTIFY_AUTH_CODE = "REQUESTING_SPOTIFY_AUTH_CODE";
export const REQUEST_SPOTIFY_AUTH_CODE_SUCCESS = "REQUEST_SPOTIFY_AUTH_CODE_SUCCESS";
export const REQUEST_SPOTIFY_AUTH_CODE_FAILURE = "REQUEST_SPOTIFY_AUTH_CODE_FAILURE";

export const REQUEST_SPOTIFY_ACCESS_TOKEN = "REQUEST_SPOTIFY_ACCESS_TOKEN";
export const REQUESTING_SPOTIFY_ACCESS_TOKEN = "REQUESTING_SPOTIFY_ACCESS_TOKEN";
export const REQUEST_SPOTIFY_ACCESS_TOKEN_SUCCESS = "REQUEST_SPOTIFY_ACCESS_TOKEN_SUCCESS";
export const REQUEST_SPOTIFY_ACCESS_TOKEN_FAILURE = "REQUEST_SPOTIFY_ACCESS_TOKEN_FAILURE";

const initialState = {
    isLoading: false,
    spotify: {
        isLinked: false,
        authCode: "",
        authError: "",
        token: {},
        tokenError: "",
    },
};

export default createReducer(initialState, {
    [REQUESTING_SPOTIFY_AUTH_CODE]: (state) => Object.assign({}, state, {
        isLoading: true,
    }),
    [REQUEST_SPOTIFY_AUTH_CODE_SUCCESS]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        spotify: {
            isLinked: true,
            authCode: payload.authCode,
            authError: "",
        },
    }),
    [REQUEST_SPOTIFY_AUTH_CODE_FAILURE]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        spotify: {
            isLinked: false,
            authCode: "",
            authError: payload.error,
        },
    }),
    [REQUESTING_SPOTIFY_ACCESS_TOKEN]: (state) => Object.assign({}, state, {
        isLoading: true,
    }),
    [REQUEST_SPOTIFY_ACCESS_TOKEN_SUCCESS]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        spotify: {
            ...state.spotify,
            token: payload.token,
            tokenError: "",
        },
    }),
    [REQUEST_SPOTIFY_ACCESS_TOKEN_FAILURE]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        spotify: {
            ...state.spotify,
            isLinked: false,
            token: {},
            tokenError: payload.error,
        },
    }),
});