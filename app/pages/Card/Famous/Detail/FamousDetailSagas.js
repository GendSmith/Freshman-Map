import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../../../config/index";
import {
  FETCH_F_DETAIL_DATA,
  willFetchFDetailData,
  didFetchFDetailData
} from "./FamousDetailActions";

import fetch from "../../../../api/fetch";

function* fetchFDetailSaga(params) {
  try {
    yield put(willFetchFDetailData());
    const res = yield call(fetch, HOST_URL + "/record", "POST", params.payload);
    if (res.CODE == 1006) {
      alert("这个点的打卡失败，请重新登录");
    }
    yield put(didFetchFDetailData(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchFDetailSaga() {
  while (1) {
    const payload = yield take(FETCH_F_DETAIL_DATA);
    yield fork(fetchFDetailSaga, payload);
  }
}
