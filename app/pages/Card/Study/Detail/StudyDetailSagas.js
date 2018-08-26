import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../../../config/index";
import {
  FETCH_S_DETAIL_DATA,
  willFetchSDetailData,
  didFetchSDetailData
} from "./StudyDetailActions";

import fetch from "../../../../api/fetch";

function* fetchSDetailSaga(params) {
  try {
    yield put(willFetchSDetailData());
    const res = yield call(fetch, HOST_URL + "/record", "POST", params.payload);
    if (res.CODE == 1006) {
      alert("这个点的打卡失败，请重新登录");
    }
    yield put(didFetchSDetailData(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchSDetailSaga() {
  while (1) {
    const payload = yield take(FETCH_S_DETAIL_DATA);
    yield fork(fetchSDetailSaga, payload);
  }
}
