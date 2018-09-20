import { fork } from "redux-saga/effects";
import { authSagas } from "./auth";

export default function* root() {
  yield [fork(authSagas)];
}
