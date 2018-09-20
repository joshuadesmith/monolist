import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "./reducers/auth";
import { RESET_GLOBAL_STATE } from "./reducers";

export const resetGlobalState = () => ({
  type: RESET_GLOBAL_STATE
});

export const signUp = ({ username, email, password }) => ({
  type: SIGN_UP,
  payload: {
    username,
    email,
    password
  }
});

export const signUpSuccess = user => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    user: user
  }
});

export const signUpFailure = err => ({
  type: SIGN_UP_FAILURE,
  payload: {
    error: err
  }
});
