import React, { Component } from 'react';
import SearchubApp from './SearchubApp';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import thunkMiddleware from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <SearchubApp />
      </Provider>
    );
  }
}
