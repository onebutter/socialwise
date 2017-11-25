export const NAMECARD_LOAD_REQUEST = 'NAMECARD_LOAD_REQUEST';
export const NAMECARD_LOAD_SUCCESS = 'NAMECARD_LOAD_SUCCESS';
export const NAMECARD_LOAD_ERROR = 'NAMECARD_LOAD_ERROR';

export const loadNamecardRequest = name => ({
  type: NAMECARD_LOAD_REQUEST,
  name
});

export const loadNamecardSuccess = (name, data) => ({
  type: NAMECARD_LOAD_SUCCESS,
  name,
  data
});

export const loadNamecardError = (name, error) => ({
  type: NAMECARD_LOAD_ERROR,
  name,
  error
});
