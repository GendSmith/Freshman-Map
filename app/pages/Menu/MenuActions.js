export const FETCH_MENU_DATA = "FETCH_MENU_DATA";
export const WILL_FETCH_MENU_DATA = "WILL_FETCH_MENU_DATA";
export const DID_FETCH_MENU_DATA = "DID_FETCH_MENU_DATA";

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

export const fetchMenuData = (params) => ({
  type: FETCH_MENU_DATA,
  payload: params
});

export const willFetchMenuData = () => ({
  type: WILL_FETCH_MENU_DATA
});

export const didFetchMenuData = (params) => ({
  type: DID_FETCH_MENU_DATA,
  payload: params
});

export default {
  fetchMenuData,
  willFetchMenuData,
  didFetchMenuData,
  fetchRankData,
  didFetchRankData
};
