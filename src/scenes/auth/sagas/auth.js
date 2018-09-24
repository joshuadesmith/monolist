import {call, put, takeLatest} from "redux-saga/effects";
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP,
    SIGN_UP_IN_PROGRESS,
    VERIFY_ACCOUNT,
    VERIFY_ACCOUNT_IN_PROGESS,
    VERIFY_ACCOUNT_SUCCESS,
    VERIFY_ACCOUNT_FAILURE,
    LOG_IN,
    LOG_IN_PROCESSING,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    SIGN_OUT,
    SIGN_OUT_IN_PROGRESS,
    SIGN_OUT_COMPLETE,
    FETCH_AUTHORIZED_USER,
    FETCH_AUTHORIZED_USER_IN_PROGRESS, FETCH_AUTHORIZED_USER_SUCCESS, FETCH_AUTHORIZED_USER_FAILURE
} from "../reducers/auth";
import {signUpFailure, signUpSuccess} from "../../../actions";
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

function signInUser(email, password) {
    console.log("Calling signInUser...");
    return Auth.signIn(email, password).then((user) => {
        return {data: user};
    }).catch((err) => {
        return {error: err};
    })
}

function signOutUser() {
    console.log("calling signOutUser...");
    return Auth.signOut().then((data) => {
        return {data: data};
    }).catch((err) => {
        return {error: err};
    })
}

function fetchAuthorizedUser() {
    console.log("calling fetchAuthorizedUser...");
    return Auth.currentAuthenticatedUser().then((user) => {
        return {user: user};
    }).catch((err) => {
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

function* callSignInUser(action) {
    const {email, password} = action.payload;
    yield put({type: LOG_IN_PROCESSING});

    const response = yield call(signInUser, email, password);
    console.log("Got response form signInUser: ", response);
    if (response.hasOwnProperty('data')) {
        console.log("Signed in user successfully");
        yield put({
            type: LOG_IN_SUCCESS,
            payload: response.data,
        });
    } else if (response.hasOwnProperty('error')) {
        console.log("User sign in failed");
        yield put({
            type: LOG_IN_FAILURE,
            payload: {
                signInError: response.error,
            }
        })
    }
}

function* callSignOutUser(action) {
    yield put({type: SIGN_OUT_IN_PROGRESS});
    const response = yield call(signOutUser);
    console.log("logged out user with response: ", response);
    yield put({type: SIGN_OUT_COMPLETE});
}

function* callFetchAuthorizedUser() {
    yield put({type: FETCH_AUTHORIZED_USER_IN_PROGRESS});
    const response = yield call(fetchAuthorizedUser);
    if (response.hasOwnProperty('user')) {
        console.log("Fetched user successfully: ", response);
        yield put({
            type: FETCH_AUTHORIZED_USER_SUCCESS,
            payload: response,
        });
    } else if (response.hasOwnProperty('error')) {
        console.log("Failed to fetch authed user: ", response);
        yield put({
            type: FETCH_AUTHORIZED_USER_FAILURE,
            payload: response,
        });
    }
}

export function* authSagas() {
    yield takeLatest(SIGN_UP, callCreateUser);
    yield takeLatest(VERIFY_ACCOUNT, callVerifyAccount);
    yield takeLatest(LOG_IN, callSignInUser);
    yield takeLatest(SIGN_OUT, callSignOutUser);
    yield takeLatest(FETCH_AUTHORIZED_USER, callFetchAuthorizedUser)
}
