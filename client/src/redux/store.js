import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import sagas from './sagas';

// import reducers from './reducers/';

const reducers = () => {};

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const middlewares = [sagaMiddleware];
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers').default)
    ); // eslint-disable-line global-require
  }

  return store;
};

export default configureStore();
