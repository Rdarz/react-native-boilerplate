import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {makeRootReducer} from './index';
// import accessTokenCheck from './middleware/accessTokenCheck.js'
// import crashReporter from './middleware/crashReporter.js'

import {loadState, saveState} from './middleware/localStorageLoad';

const createStore = (initialState = {}) => {
  initialState = loadState();
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  // if (process.env.NODE_ENV === 'development') { // enable dev tools for dev evt
  //   if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   }
  // }

  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeWithDevTools(composeEnhancers(applyMiddleware(...middleware))),
    ...enhancers,
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = history.listen(updateLocation(store))

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const reducers = require('./reducers').default
  //     store.replaceReducer(reducers(store.asyncReducers))
  //   })
  // }

  return store;
};

export default createStore;
