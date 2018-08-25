export const FETCH_L_DETAIL_DATA = "FETCH_L_DETAIL_DATA";
export const WILL_FETCH_L_DETAIL_DATA = "WILL_FETCH_L_DETAIL_DATA";
export const DID_FETCH_L_DETAIL_DATA = "DID_FETCH_L_DETAIL_DATA";

export const fetchLDetailData = (params)=>({
    type:FETCH_L_DETAIL_DATA,
    payload:params
});

export const willFetchLDetailData = ()=>({
    type:WILL_FETCH_L_DETAIL_DATA
});

export const didFetchLDetailData = (params)=>({
    type:DID_FETCH_L_DETAIL_DATA,
    payload:params
});

export default {
    fetchLDetailData,
    willFetchLDetailData,
    didFetchLDetailData
};