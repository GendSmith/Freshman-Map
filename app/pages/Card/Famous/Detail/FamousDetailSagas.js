import {take,fork,call,put} from "redux-saga/effects";
import {
    FETCH_A_DETAIL_DATA,
    willFetchADetailData,
    didFetchADetailData
} from "./FamousDetailActions"

import fetch from "../../../../api/fetch";

function * fetchADetailSaga(params) {
    try {
        yield put(willFetchADetailData());
        const res = yield call (
            fetch,
            "http:localhost:6700/record",
            "POST",
            params.payload
        );
        yield put(didFetchADetailData(res));
    } catch(err) {
        console.log(err);
    }
}

export function* watchFDetailSaga() {
    while(1) {
        const payload = yield take(FETCH_A_DETAIL_DATA);
        yield fork(fetchADetailSaga,payload);
    }
}

