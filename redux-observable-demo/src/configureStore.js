import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './epics';
import rootReducer from './widgets';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState) {
  const middlewares = [
    epicMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers)
  );

  return store;
}
