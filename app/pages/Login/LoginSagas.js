import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../config/index"
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
      HOST_URL+"/login",
      "POST",
      params.payload
    );
    console.log(message);
    if(message.CODE==1000){
      alert("找不到此用户～")
    }
    if(message.CODE==1001) {
      alert("输入信息有误，估计是学号姓名或者学院输错了Orz")
    }
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
