import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../config/index"
import {
  FETCH_MENU_DATA,
  willFetchMenuData,
  didFetchMenuData
} from "./MenuActions";
import fetch from "../../api/fetch";

function* fetchMenuSaga(params) {
  try {
    console.log("call fetchmenusaga");
    yield put(willFetchMenuData());
    const message = yield call(
      fetch,
      HOST_URL+"/point",
      "POST",
      params.payload
    );

    yield put(didFetchMenuData(message));
  } catch (err) {
    console.log(err);
  }
}

export function* watchMenuSaga() {
  while (1) {
    const payload = yield take(FETCH_MENU_DATA);
    yield fork(fetchMenuSaga, payload);
  }
}
