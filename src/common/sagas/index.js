import { fork } from "redux-saga/effects";
import { authSagas } from "../../scenes/auth/sagas/auth";
import { settingsSagas } from "../../scenes/settings/sagas";

export default function* root() {
  yield [
      fork(authSagas),
      fork(settingsSagas),
  ];
}
