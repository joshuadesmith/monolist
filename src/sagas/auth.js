import {call, put, takeLatest} from "redux-saga/effects";
import {SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP, SIGN_UP_IN_PROGRESS} from "../reducers/auth";
import {signUpFailure, signUpSuccess} from "../actions";
import {Auth} from "aws-amplify";

function createUser(email, password) {
    console.log("Calling createUser...");
    const username = email.substring(0, email.indexOf("@"));
    return Auth.signUp({
        username: email,
        password,
        attributes: {
            email
        }
    })
        .then(data => {
            return {data: data};
        })
        .catch(err => {
            return {error: err};
        });
}

function* callCreateUser(action) {
    const {email, password} = action.payload;
    yield put({type: SIGN_UP_IN_PROGRESS});

    const response = yield call(createUser, email, password);
    console.log("Got response from createUser: ", response);
    if (response.hasOwnProperty('data')) {
        console.log("Signup successful");
        yield put(signUpSuccess({
            user: response.data.user,
            userConfirmed: response.data.userConfirmed,
            userSub: response.data.userSub,
        }));
    } else if (response.hasOwnProperty('error')) {
        console.log("Singup failed");
        yield put(signUpFailure(response.error));
    }
}

export function* authSagas() {
    yield takeLatest(SIGN_UP, callCreateUser);
}
