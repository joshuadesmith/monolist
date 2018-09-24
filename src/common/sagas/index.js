import { fork } from "redux-saga/effects";
import { authSagas } from "../../scenes/auth/sagas/auth";

export default function* root() {
  yield [fork(authSagas)];
}
