import { combineReducers } from 'redux';
import namecard from 'Features/Namecard/reducer';

export const createReducers = () => {
  return combineReducers({
    namecard
  });
};
