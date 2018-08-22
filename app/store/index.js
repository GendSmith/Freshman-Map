import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";
import authReducer from "../pages/AuthRouter/AuthReducer";
import {watchAuthSaga} from "../pages/AuthRouter/AuthSagas";
import menuReducer from "../pages/Menu/MenuReducer";
import {watchMenuSaga} from "../pages/Menu/MenuSagas";

import Store from "./store";

const reducers = {
  loginReducer,
  authReducer,
  menuReducer
};

const sagas = [watchLoginSaga, watchAuthSaga,watchMenuSaga];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
