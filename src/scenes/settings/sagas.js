import {call, put, takeLatest} from "redux-saga/effects";
import {
    REQUEST_SPOTIFY_ACCESS_TOKEN,
    REQUEST_SPOTIFY_ACCESS_TOKEN_FAILURE,
    REQUEST_SPOTIFY_ACCESS_TOKEN_SUCCESS,
    REQUEST_SPOTIFY_AUTH_CODE,
    REQUESTING_SPOTIFY_ACCESS_TOKEN,
    REQUESTING_SPOTIFY_AUTH_CODE
} from "./reducers";
import axios from "axios";
import {CLIENT_ID, CLIENT_SECRET, REDIRECT_URI} from "../../config/spotify-config";
import qs from "qs";

function* callRequestSpotifyAuthCode(action) {
    console.log("Requesting Spotify auth code for user");
    yield put({
        type: REQUESTING_SPOTIFY_AUTH_CODE,
    });
}

function requestSpotifyAccessToken(code) {
    console.log("Requesting Spotify access token for user");
    const url = 'https://accounts.spotify.com/api/token';
    const data = qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
    });
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
        data: data,
        url,
    };
    const response = axios(options).then((resp) => {
        console.log("response: ", resp);
        return resp;
    }).catch((err) => {
        throw err;
    });
    return response;
}

function* callRequestSpotifyAccessToken(action) {
    const {authCode} = action.payload;
    yield put({
        type: REQUESTING_SPOTIFY_ACCESS_TOKEN,
    });
    try {
        const response = yield call(requestSpotifyAccessToken, authCode);
        console.log('Successfully retrieved Spotify access token: ', response);
        yield put({
            type: REQUEST_SPOTIFY_ACCESS_TOKEN_SUCCESS,
            payload: response,
        });
    } catch (err) {
        console.error('Error retrieving Spotify access token: ', err);
        yield put({
            type: REQUEST_SPOTIFY_ACCESS_TOKEN_FAILURE,
            payload: {
                error: err,
            },
        });
    }
}

export function* settingsSagas() {
    yield takeLatest(REQUEST_SPOTIFY_AUTH_CODE, callRequestSpotifyAuthCode);
    yield takeLatest(REQUEST_SPOTIFY_ACCESS_TOKEN, callRequestSpotifyAccessToken);
}