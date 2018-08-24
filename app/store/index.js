import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";
import authReducer from "../pages/AuthRouter/AuthReducer";
import {watchAuthSaga} from "../pages/AuthRouter/AuthSagas";
import menuReducer from "../pages/Menu/MenuReducer";
import {watchMenuSaga} from "../pages/Menu/MenuSagas";
import ADetailReducer from "../pages/Card/Activiy/Detail/ActivityDetailReducer";
import {watchADetailSaga} from "../pages/Card/Activiy/Detail/ActivityDetailSagas";

import Store from "./store";

const reducers = {
  loginReducer,
  authReducer,
  menuReducer,
  ADetailReducer
};

const sagas = [watchLoginSaga, watchAuthSaga, watchMenuSaga, watchADetailSaga];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
