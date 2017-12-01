export const NAMECARD_LOAD_REQUEST = 'NAMECARD_LOAD_REQUEST';
export const NAMECARD_LOAD_SUCCESS = 'NAMECARD_LOAD_SUCCESS';
export const NAMECARD_LOAD_ERROR = 'NAMECARD_LOAD_ERROR';

export const loadNamecardRequest = username => ({
  type: NAMECARD_LOAD_REQUEST,
  username
});

export const loadNamecardSuccess = (username, data) => ({
  type: NAMECARD_LOAD_SUCCESS,
  username,
  data
});

export const loadNamecardError = (username, error) => ({
  type: NAMECARD_LOAD_ERROR,
  username,
  error
});
