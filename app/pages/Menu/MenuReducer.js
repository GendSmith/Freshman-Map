import {DID_FETCH_MENU_DATA} from "./MenuActions";
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

export default menuReducer;
