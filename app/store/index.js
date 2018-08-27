import loginReducer from "../pages/Login/LoginReducer";
import {watchLoginSaga} from "../pages/Login/LoginSagas";
import authReducer from "../pages/AuthRouter/AuthReducer";
import {watchAuthSaga} from "../pages/AuthRouter/AuthSagas";
import menuReducer from "../pages/Menu/MenuReducer";
import {watchMenuSaga} from "../pages/Menu/MenuSagas";
import ADetailReducer from "../pages/Card/Activiy/Detail/ActivityDetailReducer";
import {watchADetailSaga} from "../pages/Card/Activiy/Detail/ActivityDetailSagas";
import SDetailReducer from "../pages/Card/Study/Detail/StudyDetailReducer";
import {watchSDetailSaga} from "../pages/Card/Study/Detail/StudyDetailSagas";
import LDetailReducer from "../pages/Card/Life/Detail/LifeDetailReducer";
import {watchLDetailSaga} from "../pages/Card/Life/Detail/LifeDetailSagas";
import FDetailReducer from "../pages/Card/Famous/Detail/FamousDetailReducer";
import {watchFDetailSaga} from "../pages/Card/Famous/Detail/FamousDetailSagas";
import rankReducer from "../pages/End/EndReducer";
import {watchRankSaga} from "../pages/End/EndSagas";

import Store from "./store";

const reducers = {
  loginReducer,
  authReducer,
  menuReducer,
  ADetailReducer,
  SDetailReducer,
  LDetailReducer,
  FDetailReducer,
  rankReducer
};

const sagas = [
  watchLoginSaga,
  watchAuthSaga,
  watchMenuSaga,
  watchADetailSaga,
  watchSDetailSaga,
  watchLDetailSaga,
  watchFDetailSaga,
  watchRankSaga
];

export default (initialState = {}) => () =>
  Store(initialState, reducers, sagas);
