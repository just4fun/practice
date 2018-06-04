import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// *********************************
// Actions
// *********************************

// export to sagas as listener
export const REPOS_FETCH = 'REPOS_FETCH';
const REPOS_FETCH_REQUEST = 'REPOS_FETCH_REQUEST';
const REPOS_FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS';
const REPOS_FETCH_FAILURE = 'REPOS_FETCH_FAILURE';

export const REPO_ADD = 'REPO_ADD';
const REPO_ADD_SUCCESS = 'REPO_ADD_SUCCESS';
export const REPO_REMOVE = 'REPO_REMOVE';
const REPO_REMOVE_SUCCESS = 'REPO_REMOVE_SUCCESS';
export const REPO_FAVOR = 'REPO_FAVOR';
const REPO_FAVOR_SUCCESS = 'REPO_FAVOR_SUCCESS';

// *********************************
// Action Creators
// *********************************

// export to components to dispatch
export const fetchRepos = createAction(REPOS_FETCH);
export const addRepo = createAction(REPO_ADD);
export const removeRepo = createAction(REPO_REMOVE);
export const favorRepo = createAction(REPO_FAVOR);

// export to sagas as action entity
export const repos = {
  request: createAction(REPOS_FETCH_REQUEST),
  success: createAction(REPOS_FETCH_SUCCESS),
  failure: createAction(REPOS_FETCH_FAILURE)
};
export const add = {
  success: createAction(REPO_ADD_SUCCESS),
}
export const remove = {
  success: createAction(REPO_REMOVE_SUCCESS),
}
export const favor = {
  success: createAction(REPO_FAVOR_SUCCESS),
}

// *********************************
// Reducer
// *********************************

const initialState = fromJS({
  isFetching: false,
  data: fromJS([]),
  error: null
});

export default handleActions({
  [REPOS_FETCH_REQUEST]: (state, action) => (
    state.set('isFetching', true)
         .set('error', null)
  ),
  [REPOS_FETCH_SUCCESS]: (state, action) => (
    state.set('isFetching', false)
         .set('data', fromJS(action.payload))
  ),
  [REPOS_FETCH_FAILURE]: (state, action) => (
    state.set('isFetching', false)
         .set('error', action.error)
  ),
  [REPO_ADD_SUCCESS]: (state, action) => (
    state.set('data', state.get('data').concat(fromJS([action.payload])))
  ),
  [REPO_REMOVE_SUCCESS]: (state, action) => (
    state.set('data', state.get('data').filter(repo => repo.get('id') !== action.payload.id))
  ),
  [REPO_FAVOR_SUCCESS]: (state, action) => {
    // Without immutable.js, we should do like following.
    // BTW, fucking stupid 758e6615d5dd2ccded25124b0ffa79cd2ba25207.
    // return {
    //   ...state,
    //   data: state.data.map(repo => {
    //     if (repo.id === action.payload.id) {
    //       return {
    //         ...repo,
    //         isFavorite: action.payload.isFavorite;
    //       }
    //     }
    //     return repo;
    //   })
    // };

    let index = state.get('data').findIndex(repo => repo.get('id') === action.payload.id);
    return state.setIn(['data', index, 'isFavorite'], action.payload.isFavorite);
  }
}, initialState);
