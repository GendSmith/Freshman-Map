export const FETCH_A_DETAIL_DATA = "FETCH_A_DETAIL_DATA";
export const WILL_FETCH_A_DETAIL_DATA = "WILL_FETCH_A_DETAIL_DATA";
export const DID_FETCH_A_DETAIL_DATA = "DID_FETCH_A_DETAIL_DATA";

export const fetchADetailData = (params)=>({
    type:FETCH_A_DETAIL_DATA,
    payload:params
});

export const willFetchADetailData = ()=>({
    type:WILL_FETCH_A_DETAIL_DATA
});

export const didFetchADetailData = (params)=>({
    type:DID_FETCH_A_DETAIL_DATA,
    payload:params
});

export default {
    fetchADetailData,
    willFetchADetailData,
    didFetchADetailData
};