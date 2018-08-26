import {DID_FETCH_MENU_DATA, DID_FETCH_RANK_DATA} from "./MenuActions";
let INITIAL_STATE = {
  menuRes: {}
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DID_FETCH_MENU_DATA: {
      return Object.assign({}, state, {menuRes: action.payload});
    }
    default:
      return state;
  }
};

const rankReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DID_FETCH_RANK_DATA:
      return Object.assign({}, state, {rankRes: action.payload});
    default:
      return state;
  }
};

export default menuReducer;
