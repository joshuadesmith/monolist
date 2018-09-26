import {call, put, takeLatest} from "redux-saga/effects";
import {REQUEST_SPOTIFY_AUTH_CODE, REQUESTING_SPOTIFY_AUTH_CODE} from "./reducers";
import axios from "axios";
import {CLIENT_ID} from "../../spotify-config";

function requestSpotifyAuthCode() {
    console.log("Requesting Spotify auth code for user");
    axios.get('https://accounts.spotify.com/authorize/', {
        params: {
            client_id: CLIENT_ID,
            response_type: 'code',
        }
    })
}

function* callRequestSpotifyAuthCode() {
    yield put({
        type: REQUESTING_SPOTIFY_AUTH_CODE,
    });
}

export function* settingsSagas() {
    yield takeLatest(REQUEST_SPOTIFY_AUTH_CODE);
}