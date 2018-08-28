import {DID_FETCH_RANK_DATA} from "./EndActions";
let INITIAL_STATE = {
  rankRes: {}
};

const rankReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DID_FETCH_RANK_DATA:
      return Object.assign({}, state, {rankRes: action.payload});
    default:
      return state;
  }
};

export default rankReducer;
