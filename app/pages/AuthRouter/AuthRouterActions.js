export const FETCH_AUTH_DATA = "FETCH_AUTH_DATA";
export const WILL_FETCH_AUTH_DATA = "WILL_FETCH_AUTH_DATA";
export const DID_FETCH_AUTH_DATA = "DID_FETCH_AUTH_DATA";

export const CLEAR = "CLEAR";

export const fetchAuthData = () => ({
  type: FETCH_AUTH_DATA
});

export const willFetchAuthData = () => ({
  type: WILL_FETCH_AUTH_DATA
});

export const didFetchAuthData = (params) => ({
  type: DID_FETCH_AUTH_DATA,
  payload: params
});

export const clear = (params) => ({
  type: CLEAR
});

export default {
  fetchAuthData,
  willFetchAuthData,
  didFetchAuthData,
  clear
};
