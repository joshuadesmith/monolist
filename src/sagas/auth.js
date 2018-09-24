import {call, put, takeLatest} from "redux-saga/effects";
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP,
    SIGN_UP_IN_PROGRESS,
    VERIFY_ACCOUNT,
    VERIFY_ACCOUNT_IN_PROGESS, VERIFY_ACCOUNT_SUCCESS, VERIFY_ACCOUNT_FAILURE
} from "../reducers/auth";
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

function verifyAccount(email, code) {
    console.log("Calling verifyAccount...");
    return Auth.confirmSignUp(email, code).then((value) => {
        return {data: value};
    }).catch((err) => {
        return {error: err};
    })
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

function* callVerifyAccount(action) {
    const {email, code} = action.payload;
    yield put({type: VERIFY_ACCOUNT_IN_PROGESS});

    const response = yield call(verifyAccount, email, code);
    console.log("Got response form verifyAccount: ", response);
    if (response.hasOwnProperty('data')) {
        console.log("Verified account successfully");
        yield put({
            type: VERIFY_ACCOUNT_SUCCESS,
        });
    } else if (response.hasOwnProperty('error')) {
        console.log("Account verification failed");
        yield put({
            type: VERIFY_ACCOUNT_FAILURE,
        })
    }
}

export function* authSagas() {
    yield takeLatest(SIGN_UP, callCreateUser);
    yield takeLatest(VERIFY_ACCOUNT, callVerifyAccount);
}
