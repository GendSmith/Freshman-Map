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
    const message = yield call(fetch, "http://newsysu.cn:6700/check", "GET");
    console.log(message);
    // if(message.payload,CODE==200){
    //   localStorage.setItem("id", message[0].id);
    //   localStorage.setItem("college", message[0].college);
    // }
    console.log("000");
    console.log(message[0]);
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
