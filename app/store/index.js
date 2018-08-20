import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";
import authReducer from "../pages/AuthRouter/AuthReducer";
import {watchAuthSaga} from "../pages/AuthRouter/AuthSagas";
import Store from "./store";

const reducers = {
  loginReducer,
  authReducer
};

const sagas = [watchLoginSaga, watchAuthSaga];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
