import {take, fork, call, put} from "redux-saga/effects";
import {
  FETCH_AUTH_DATA,
  willFetchAuthData,
  didFetchAuthData
} from "./AuthRouterActions";
import fetch from "../../api/fetch";

function* fetchAuthSaga() {
  try {
    console.log("call fetchauthsaga");
    yield put(willFetchAuthData());
    const message = yield call(fetch, "http://localhost:6699/check", "GET");
    console.log(message);
    yield put(didFetchAuthData(message));
  } catch (err) {
    console.log(err);
  }
}

export function* watchAuthSaga() {
  while (1) {
    yield take(FETCH_AUTH_DATA);
    yield fork(fetchAuthSaga);
  }
}
