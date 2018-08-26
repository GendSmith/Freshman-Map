import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../../../config/index";
import {
  FETCH_L_DETAIL_DATA,
  willFetchLDetailData,
  didFetchLDetailData
} from "./LifeDetailActions";

import fetch from "../../../../api/fetch";

function* fetchLDetailSaga(params) {
  try {
    yield put(willFetchLDetailData());
    const res = yield call(fetch, HOST_URL + "/record", "POST", params.payload);
    if (res.CODE == 1006) {
      alert("这个点的打卡失败，请重新登录");
    }
    yield put(didFetchLDetailData(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchLDetailSaga() {
  while (1) {
    const payload = yield take(FETCH_L_DETAIL_DATA);
    yield fork(fetchLDetailSaga, payload);
  }
}
