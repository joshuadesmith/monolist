import {createReducer} from "../utils";

export const FETCH_AUTHORIZED_USER = "FETCH_AUTHORIZED_USER";
export const FETCH_AUTHORIZED_USER_IN_PROGRESS = "FETCH_AUTHORIZED_USER_IN_PROGRESS";
export const FETCH_AUTHORIZED_USER_SUCCESS = "FETCH_AUTHORIZED_USER_SUCCESS";
export const FETCH_AUTHORIZED_USER_FAILURE = "FETCH_AUTHORIZED_USER_FAILURE";

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_IN_PROGRESS = "SIGN_IN_IN_PROGRESS";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const SIGN_OUT = "SIGN_OUT";
export const SIGN_OUT_IN_PROGRESS = "SIGN_OUT_IN_PROGRESS";
export const SIGN_OUT_COMPLETE = "SIGN_OUT_COMPLETE";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_IN_PROGRESS = "SIGN_UP_IN_PROGRESS";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const VERIFY_ACCOUNT = "VERIFY_ACCOUNT";
export const VERIFY_ACCOUNT_IN_PROGESS = "VERIFY_ACCOUNT_IN_PROGRESS";
export const VERIFY_ACCOUNT_SUCCESS = "VERIFY_ACCOUNT_SUCCESS";
export const VERIFY_ACCOUNT_FAILURE = "VERIFY_ACCOUNT_FAILURE";

const initialState = {
    isLoading: false,
    user: {},
    userConfirmed: false,

    signUpError: false,
    signInError: false,

    signUpErrorMessage: "",
    signInErrorMessage: "",
};

export default createReducer(initialState, {
    [FETCH_AUTHORIZED_USER_IN_PROGRESS]: (state) => Object.assign({}, state, {
        isLoading: true
    }),
    [FETCH_AUTHORIZED_USER_SUCCESS]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        user: payload.user,
    }),
    [FETCH_AUTHORIZED_USER_FAILURE]: (state, payload) => Object.assign({}, state, {
        isLoading: false,
        signInError: true,
        signInErrorMessage: payload.error,
        user: {},
    }),
    [SIGN_UP_IN_PROGRESS]: state => Object.assign({}, state, {
            isLoading: true,
        }),
    [SIGN_UP_SUCCESS]: (state) => Object.assign({}, state, {
            isLoading: false,
            signUpError: false,
        }),
    [SIGN_UP_FAILURE]: (state, payload) => Object.assign({}, state, {
            isLoading: false,
            signUpError: true,
            signUpErrorMessage: payload.error,
        }),
    [VERIFY_ACCOUNT_IN_PROGESS]: state => Object.assign({}, state, {
            isLoading: true,
        }),
    [VERIFY_ACCOUNT_SUCCESS]: (state) => Object.assign({}, state, {
            isLoading: false,
            userConfirmed: true,
        }),
    [VERIFY_ACCOUNT_FAILURE]: (state) => Object.assign({}, state, {
            isLoading: false,
        }),
    [SIGN_IN_IN_PROGRESS]: (state) => Object.assign({}, state, {
            isLoading: true,
        }),
    [SIGN_IN_SUCCESS]: (state, payload) => Object.assign({}, state, {
            isLoading: false,
            user: {
                username: payload.username,
            },
            session: payload.signInUserSession,
            signInError: false,
            signInErrorMessage: "",
        }),
    [SIGN_IN_FAILURE]: (state, payload) => Object.assign({}, state, {
            isLoading: false,
            signInError: true,
            signInErrorMessage: payload.error,
            user: {},
        }),
    [SIGN_OUT_COMPLETE]: (state) => Object.assign({}, state, initialState),
});
