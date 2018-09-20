import { combineReducers } from "redux";
import authReducer from "./auth";

export const RESET_GLOBAL_STATE = "RESET_GLOBAL_STATE";

const appReducer = combineReducers({
  auth: authReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_GLOBAL_STATE) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
