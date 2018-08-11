import {DID_FETCH_LOGIN_DATA,CLEAR} from "./LoginActions";
let INITIAL_STATE = {};

const loginReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type) {
        case DID_FETCH_LOGIN_DATA:
            return Object.assign({},state,action.payload);
        case CLEAR:
            return Object.assign({});
        default:
            return state;
    }
};

export default loginReducer;