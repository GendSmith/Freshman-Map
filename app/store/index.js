import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";
import Store from "./store";

const reducers = {
  LoginReducer: loginReducer
};

const sagas = [watchLoginSaga];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
