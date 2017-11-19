import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';
// import reducers from './reducers/';

const reducers = () => {};

const configureStore = () => {
  let store = createStore(reducers, devToolsEnhancer());
  return store;
};

export default configureStore();
