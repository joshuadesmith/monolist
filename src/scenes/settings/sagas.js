import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_SPOTIFY_AUTH_CODE, REQUESTING_SPOTIFY_AUTH_CODE} from "./reducers";
import axios from "axios";
import {CLIENT_ID} from "../../spotify-config";

// List of scopes to fine tune permissions
const spotifyAuthScopes = [
    'user-read-private',
    'user-read-email',
];

function requestSpotifyAuthCode(callBackUrl) {
    console.log("Requesting Spotify auth code for user");
    axios.get('https://accounts.spotify.com/authorize/', {
        params: {
            client_id: CLIENT_ID,
            response_type: 'code',
            callback_uri: callBackUrl,
        }
    })
}

function* callRequestSpotifyAuthCode(action) {
    yield put({
        type: REQUESTING_SPOTIFY_AUTH_CODE,
    });
}

export function* settingsSagas() {
    yield takeLatest(REQUEST_SPOTIFY_AUTH_CODE, callRequestSpotifyAuthCode);
}