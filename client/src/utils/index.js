export const createStatus = types => {
  const { request, success, error } = types;
  const initial = {
    request: false,
    success: false,
    error: false
  };

  return (state = initial, action) => {
    if (request.indexOf(action.type) > -1) {
      return {
        request: true,
        success: false,
        error: false
      };
    }

    if (success.indexOf(action.type) > -1) {
      return {
        request: false,
        success: true,
        error: false
      };
    }

    if (error.indexOf(action.type) > -1) {
      return {
        request: false,
        success: false,
        error: true
      };
    }

    return state;
  };
};
