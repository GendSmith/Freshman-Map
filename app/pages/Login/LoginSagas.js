import {take, fork, call, put} from "redux-saga/effects";
import {
  FETCH_LOGIN_DATA,
  willFetchLoginData,
  didFetchLoginData
} from "./LoginActions";
import fetch from "../../api/fetch";

function* fetchLoginSaga(params) {
  try {
    console.log("call fetchloginsaga");
    yield put(willFetchLoginData());
    const message = yield call(
      fetch,
      "http://localhost:6700/login",
      "POST",
      params.payload
    );

    yield put(didFetchLoginData(message));
  } catch (err) {
    console.log(err);
  }
}

export function* watchLoginSaga() {
  while (1) {
    const payload = yield take(FETCH_LOGIN_DATA);
    yield fork(fetchLoginSaga, payload);
  }
}
