export const FETCH_RANK_DATA = "FETCH_RANK_DATA";
export const DID_FETCH_RANK_DATA = "DID_FETCH_RANK_DATA";

export const fetchRankData = (params) => ({
  type: FETCH_RANK_DATA,
  payload: params
});

export const didFetchRankData = (params) => ({
  type: DID_FETCH_RANK_DATA,
  type: params
});

export default {
  fetchRankData,
  didFetchRankData
};
