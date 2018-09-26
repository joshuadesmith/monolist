import {combineReducers} from "redux";
import {reducer as form} from "redux-form";
import authReducer from "../../scenes/auth/reducers/auth";
import settingsReducer from "../../scenes/user/settings/reducers";

export const RESET_GLOBAL_STATE = "RESET_GLOBAL_STATE";

const appReducer = combineReducers({
    form: form,
    auth: authReducer,
    settings: settingsReducer,
});

const rootReducer = (state, action) => {
    if (action.type === RESET_GLOBAL_STATE) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
