This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Description

This is a demo project which introduced best practise for react and redux from my experience and bases on existing products I have been working on.

## Must Have

- React
- Redux
- React-Router
- Redux-Saga (To replace [redux-thunk](https://github.com/gaearon/redux-thunk) and custom promise middleware)

## Todo

- [x] Basic infrastructure with `must have` above

```
src/
  components/            -- Shared components
    Component/
      index.js
      styles.less
  pages/                 -- Route-aware pages
    Page/
      index.js           -- Entry to route-aware page, using `react-loadable` for better experience to dynamic imports
      container.js       -- Route-aware page container, using `react-redux` to bind redux store, and also inject reducer and sagas dynamically here
      component.js       -- Page main component
      widgets.js         -- Ducks pattern, including `Action`, `Action Creators`, `Reducer`
      sagas.js           -- Sagas to handle side effects like asynchronous actions
      styles.less        -- You know, CSS file
  services/
    api.js
  utils/
    request.js
    sagaHelper.js
```

- [x] Code Splitting (inject components, reducers, sagas asynchronously with react router v4)
  - https://reactjs.org/docs/code-splitting.html#route-based-code-splitting
  - https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#code-splitting
  - https://github.com/react-boilerplate/react-boilerplate (best demo to show how to do code splitting)

- [x] Introduce [immutable.js](https://facebook.github.io/immutable-js/) with [React Pure component](https://reactjs.org/docs/react-api.html#reactpurecomponent)
  - https://reactjs.org/docs/react-api.html#reactpurecomponent
  - https://just4fun.github.io/2015/07/18/use-immutable-js-in-react-application/
- [x] Unit tests example with [Jest](https://github.com/facebook/jest), [Enzyme](https://github.com/airbnb/enzyme), and provide coverage report

[Example](/react-app-demo/tests/pages/User/component.test.js) for how to write unit tests.

Simply run

```bash
yarn test
```

or

```bash
yarn test -- --coverage
```

## To you

Enjoy.
