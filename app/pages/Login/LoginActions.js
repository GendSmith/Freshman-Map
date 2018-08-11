export const FETCH_LOGIN_DATA = "FETCH_LOGIN_DATA";
export const WILL_FETCH_LOGIN_DATA = "WILL_FETCH_LOGIN_DATA";
export const DID_FETCH_LOGIN_DATA = "DID_FETCH_LOGIN_DATA";

export const CLEAR = "CLEAR";

export const fetchLoginData = (params) => ({
  type: FETCH_LOGIN_DATA,
  payload: params
});

export const willFetchLoginData = () => ({
  type: WILL_FETCH_LOGIN_DATA
});

export const didFetchLoginData = (params) => ({
  type: DID_FETCH_LOGIN_DATA,
  payload: params
});

export const clear = (params) => ({
  type: CLEAR
});

export default {
  fetchLoginData,
  willFetchLoginData,
  didFetchLoginData,
  clear
};
