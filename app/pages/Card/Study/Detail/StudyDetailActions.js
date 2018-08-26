export const FETCH_S_DETAIL_DATA = "FETCH_S_DETAIL_DATA";
export const WILL_FETCH_S_DETAIL_DATA = "WILL_FETCH_S_DETAIL_DATA";
export const DID_FETCH_S_DETAIL_DATA = "DID_FETCH_S_DETAIL_DATA";

export const fetchSDetailData = (params) => ({
  type: FETCH_S_DETAIL_DATA,
  payload: params
});

export const willFetchSDetailData = () => ({
  type: WILL_FETCH_S_DETAIL_DATA
});

export const didFetchSDetailData = (params) => ({
  type: DID_FETCH_S_DETAIL_DATA,
  payload: params
});

export default {
  fetchSDetailData,
  willFetchSDetailData,
  didFetchSDetailData
};
