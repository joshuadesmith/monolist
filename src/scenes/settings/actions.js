import {REQUEST_SPOTIFY_AUTH_CODE} from "./reducers";

export const requestSpotifyAuthCode = (callBackUrl) => ({
    type: REQUEST_SPOTIFY_AUTH_CODE,
    payload: {
        callBackUrl,
    }
});