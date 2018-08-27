import {FETCH_RANK_DATA, didFetchRankData} from "./EndActions";
import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../config/index";
import fetch from "../../api/fetch";

function* fetchRankSaga(params) {
  try {
    const res = yield call(fetch, HOST_URL + "/rank", "POST", params.payload);
    console.log("rand res:");
    console.log(res);
    yield put(didFetchRankData(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchRankSaga() {
  while (1) {
    const payload = yield take(FETCH_RANK_DATA);
    yield fork(fetchRankSaga, payload);
  }
}
