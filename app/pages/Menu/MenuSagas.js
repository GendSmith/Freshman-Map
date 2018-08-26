import {take, fork, call, put} from "redux-saga/effects";
import {HOST_URL} from "../../../config/index";
import {
  FETCH_MENU_DATA,
  willFetchMenuData,
  didFetchMenuData,
  FETCH_RANK_DATA
} from "./MenuActions";
import fetch from "../../api/fetch";

function isFinish(type, action, imgUrl) {
  console.log(type);
  let temp = action;
  //console.log(temp);
  let currentPointNum = 0;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].type == type && imgUrl.indexOf(temp[i].img_url) == -1) {
      currentPointNum++;
    }
  }

  return currentPointNum == 0;
}

function finishAll(message) {
  const action = message.pointInfo;
  const imgUrl = message.progress;
  console.log("什么鬼");
  console.log(imgUrl);
  localStorage.setItem(
    "finishActivity",
    isFinish("activity", action, imgUrl.activity.imgUrl)
  );
  localStorage.setItem(
    "finishStudy",
    isFinish("study", action, imgUrl.study.imgUrl)
  );
  localStorage.setItem(
    "finishFamous",
    isFinish("architecture", action, imgUrl.architecture.imgUrl)
  );
  localStorage.setItem(
    "finishLife",
    isFinish("life", action, imgUrl.life.imgUrl)
  );
  const state = {
    finishActivity: localStorage.getItem("finishActivity"),
    finishStudy: localStorage.getItem("finishStudy"),
    finishLife: localStorage.getItem("finishLife"),
    finishFamous: localStorage.getItem("finishFamous")
  };
  console.log("finish state");
  console.log(state);
  console.log("check finish state:");
  console.log(
    state.finishActivity == "true" &&
      state.finishStudy == "true" &&
      state.finishFamous == "true" &&
      state.finishLife == "true"
  );
  if (
    state.finishActivity == "true" &&
    state.finishStudy == "true" &&
    state.finishFamous == "true" &&
    state.finishLife == "true"
  ) {
    console.log("全部打卡完成");
    window.location.href = "/#/end";
    //this.props.history.push("/end");
  }
}

function* fetchMenuSaga(params) {
  try {
    console.log("call fetchmenusaga");
    yield put(willFetchMenuData());
    let message = yield call(
      fetch,
      HOST_URL + "/point",
      "POST",
      params.payload
    );
    finishAll(message);
    yield put(didFetchMenuData(message));
  } catch (err) {
    console.log(err);
  }
}

function* fetchRankSaga(params) {
  try {
    const res = yield call(fetch, HOST_URL + "/rank", "POST", params.payload);
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

export function* watchRankSaga() {
  while (1) {
    const payload = yield take(FETCH_RANK_DATA);
    yield fork(fetchRankSaga, payload);
  }
}
