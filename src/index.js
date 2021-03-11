import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import reportWebVitals from './reportWebVitals';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { Route } from 'react-router';
import thunk from 'redux-thunk';
import App from './App';
import reducer from './util/trivia';
import './index.css';

const history = createHistory();
const store = createStore(
  combineReducers({
    app: reducer,
    router: routerReducer
  }),
  applyMiddleware(...[routerMiddleware(history), thunk])
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route exact path="/*" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
reportWebVitals();
