import { call, put, takeLatest } from "redux-saga/effects";
import { SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_UP, SIGN_UP_IN_PROGRESS } from "../reducers/auth";
import { signUpFailure, signUpSuccess } from "../actions";
import { Auth } from "aws-amplify";

function createUser(username, password, email) {
  console.log("Calling createUser...")
  return Auth.signUp({
    username,
    password,
    attributes: {
      email
    }
  })
    .then(data => {
      return {data: data};
    })
    .catch(err => {
      return {error: error};
    });
}

function* callCreateUser(action) {
  const { username, password, email } = action.payload;
  yield put({type: SIGN_UP_IN_PROGRESS});
  
  const response = yield call(createUser, username, password, email);
  console.log("Got response from createUser: ", response);
  if (response.hasOwnProperty('data')) {
    console.log("Signup successful");
    yield put(signUpSuccess(action.payload));
  } else if (response.hasOwnProperty('error')) {
    console.log("Singup failed");
    yield put(signUpFailure(response.error));
  }
}

export function* authSagas() {
  yield takeLatest(SIGN_UP, callCreateUser);
}
