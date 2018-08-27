export const FETCH_MENU_DATA = "FETCH_MENU_DATA";
export const WILL_FETCH_MENU_DATA = "WILL_FETCH_MENU_DATA";
export const DID_FETCH_MENU_DATA = "DID_FETCH_MENU_DATA";

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
};
