import { combineReducers } from 'redux';
import { createStatus } from 'Utils';
import * as actions from './actions';
const {
  NAMECARD_LOAD_REQUEST,
  NAMECARD_LOAD_SUCCESS,
  NAMECARD_LOAD_ERROR
} = actions;

const status = createStatus({
  request: [NAMECARD_LOAD_REQUEST],
  success: [NAMECARD_LOAD_SUCCESS],
  error: [NAMECARD_LOAD_ERROR]
});

const entitiesInitial = null;

const entities = (state = entitiesInitial, action) => {
  switch (action.type) {
    case NAMECARD_LOAD_SUCCESS:
      state = {
        ...state,
        [action.username]: action.data
      };
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  status,
  entities
});
