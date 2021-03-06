import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../../../config/index";
import {
  FETCH_A_DETAIL_DATA,
  willFetchADetailData,
  didFetchADetailData
} from "./ActivityDetailActions";

import fetch from "../../../../api/fetch";

function* fetchADetailSaga(params) {
  try {
    yield put(willFetchADetailData());
    const res = yield call(fetch, HOST_URL + "/record", "POST", params.payload);
    if (res.CODE == 1006) {
      alert("这个点的打卡失败，请重新登录");
    }
    yield put(didFetchADetailData(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchADetailSaga() {
  while (1) {
    const payload = yield take(FETCH_A_DETAIL_DATA);
    yield fork(fetchADetailSaga, payload);
  }
}
