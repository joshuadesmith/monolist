import {createReducer} from "../utils";

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const SIGN_OUT = "SIGN_OUT";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_IN_PROGRESS = "SIGN_UP_IN_PROGRESS";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

const initialState = {
    isAuthenticating: false,
    user: {},
    userConfirmed: false,
    userSub: "",

    signUpError: false,
    signInError: false,

    signUpErrorMessage: "",
    signInErrorMessage: ""
};

export default createReducer(initialState, {
    [SIGN_UP]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false
        }),
    [SIGN_UP_IN_PROGRESS]: state =>
        Object.assign({}, state, {
            isAuthenticating: true,
        }),
    [SIGN_UP_SUCCESS]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            user: payload.user,
            userConfirmed: payload.userConfirmed,
            userSub: payload.userSub,
        }),
    [SIGN_UP_FAILURE]: (state, payload) =>
        Object.assign({}, state, {
            isAuthenticating: false,
            signUpError: true,
            signUpErrorMessage: payload.error.message
        })
});
