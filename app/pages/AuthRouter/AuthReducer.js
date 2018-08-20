import {DID_FETCH_AUTH_DATA, CLEAR} from "./AuthRouterActions";
let INITIAL_STATE = {
  AuthRes: {}
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DID_FETCH_AUTH_DATA:
      return Object.assign({}, state, {AuthRes: action.payload});
    case CLEAR:
      return Object.assign({});
    default:
      return state;
  }
};

export default AuthReducer;
