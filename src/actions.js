import {
    SIGN_UP,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    VERIFY_ACCOUNT,
    SIGN_IN,
    SIGN_OUT,
    FETCH_AUTHORIZED_USER
} from "./reducers/auth";
import {RESET_GLOBAL_STATE} from "./reducers";

export const resetGlobalState = () => ({
    type: RESET_GLOBAL_STATE
});

export const signUp = ({email, password}) => ({
    type: SIGN_UP,
    payload: {
        email,
        password
    }
});

export const signUpSuccess = ({user, userConfirmed, userSub}) => ({
    type: SIGN_UP_SUCCESS,
    payload: {
        user: user,
        userConfirmed: userConfirmed,
        userSub: userSub,
    }
});

export const signUpFailure = err => ({
    type: SIGN_UP_FAILURE,
    payload: {
        error: err
    }
});

export const verifyAccount = ({email, code}) => ({
    type: VERIFY_ACCOUNT,
    payload: {
        email,
        code,
    }
});

export const signIn = ({email, password}) => ({
    type: SIGN_IN,
    payload: {
        email,
        password,
    }
});

export const signOut = () => ({
    type: SIGN_OUT,
});

export const fetchAuthorizedUser = () => ({
    type: FETCH_AUTHORIZED_USER,
});
