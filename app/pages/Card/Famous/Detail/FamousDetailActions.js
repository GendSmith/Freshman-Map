export const FETCH_F_DETAIL_DATA = "FETCH_F_DETAIL_DATA";
export const WILL_FETCH_F_DETAIL_DATA = "WILL_FETCH_F_DETAIL_DATA";
export const DID_FETCH_F_DETAIL_DATA = "DID_FETCH_F_DETAIL_DATA";

export const fetchFDetailData = (params) => ({
  type: FETCH_F_DETAIL_DATA,
  payload: params
});

export const willFetchFDetailData = () => ({
  type: WILL_FETCH_F_DETAIL_DATA
});

export const didFetchFDetailData = (params) => ({
  type: DID_FETCH_F_DETAIL_DATA,
  payload: params
});

export default {
  fetchFDetailData,
  willFetchFDetailData,
  didFetchFDetailData
};
