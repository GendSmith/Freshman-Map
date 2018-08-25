import {DID_FETCH_S_DETAIL_DATA} from "./StudyDetailActions";
let INITIAL_STATE = {
    res:{}
}

const SDetailReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case DID_FETCH_S_DETAIL_DATA:
            return Object.assign({},state,{res:action.payload});
        default:
            return state;
    }
};

export default SDetailReducer;