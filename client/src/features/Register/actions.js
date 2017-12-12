export const REGISTER_CREDENTIAL_SUBMIT_REQUEST =
  'REGISTER_CREDENTIAL_SUBMIT_REQUEST';
export const REGISTER_CREDENTIAL_SUBMIT_SUCCESS =
  'REGISTER_CREDENTIAL_SUBMIT_SUCCESS';
export const REGISTER_CREDENTIAL_SUBMIT_ERROR =
  'REGISTER_CREDENTIAL_SUBMIT_ERROR';

export const submitCredentialRequest = credentials => ({
  type: REGISTER_CREDENTIAL_SUBMIT_REQUEST,
  credentials
});

export const submitCredentialSuccess = () => ({
  type: REGISTER_CREDENTIAL_SUBMIT_SUCCESS
});

export const submitCredentialError = error => ({
  type: REGISTER_CREDENTIAL_SUBMIT_ERROR,
  error
});
