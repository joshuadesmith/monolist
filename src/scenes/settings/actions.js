import {
    REQUEST_SPOTIFY_ACCESS_TOKEN,
    REQUEST_SPOTIFY_AUTH_CODE, REQUEST_SPOTIFY_AUTH_CODE_FAILURE, REQUEST_SPOTIFY_AUTH_CODE_SUCCESS
} from "./reducers";

export const requestSpotifyAuthCode = () => ({
    type: REQUEST_SPOTIFY_AUTH_CODE,
});

export const requestSpotifyAuthCodeSuccess = (authCode) => ({
    type: REQUEST_SPOTIFY_AUTH_CODE_SUCCESS,
    payload: {
        authCode,
    },
});

export const requestSpotifyAuthCodeFailure = (error) => ({
    type: REQUEST_SPOTIFY_AUTH_CODE_FAILURE,
    payload: {
        error,
    },
});

export const requestSpotifyAccessToken = (authCode) => ({
    type: REQUEST_SPOTIFY_ACCESS_TOKEN,
    payload: {
        authCode,
    },
});