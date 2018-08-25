import {DID_FETCH_L_DETAIL_DATA} from "./LifeDetailActions";
let INITIAL_STATE = {
    res:{}
}

const LDetailReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case DID_FETCH_L_DETAIL_DATA:
            return Object.assign({},state,{res:action.payload});
        default:
            return state;
    }
};

export default LDetailReducer;