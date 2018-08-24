import {DID_FETCH_A_DETAIL_DATA} from "./FamousDetailActions";
let INITIAL_STATE = {
    res:{}
}

const ADetailReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case DID_FETCH_A_DETAIL_DATA:
            return Object.assign({},state,{res:action.payload});
        default:
            return state;
    }
};

export default ADetailReducer;