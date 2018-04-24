import { createAction, handleActions } from 'redux-actions';

// *********************************
// Actions
// *********************************

export const REPOS_FETCH = 'REPOS_FETCH';
const REPOS_FETCH_REQUEST = 'REPOS_FETCH_REQUEST';
const REPOS_FETCH_SUCCESS = 'REPOS_FETCH_SUCCESS';
const REPOS_FETCH_FAILURE = 'REPOS_FETCH_FAILURE';

// *********************************
// Action Creators
// *********************************

export const fetchRepos = createAction(REPOS_FETCH);
export const fetching = createAction(REPOS_FETCH_REQUEST);
export const success = createAction(REPOS_FETCH_SUCCESS);
export const failure = createAction(REPOS_FETCH_FAILURE);

// *********************************
// Reducer
// *********************************

const initialState = {
  isFetching: false,
  data: [],
  error: null
};

export default handleActions({
  [REPOS_FETCH_REQUEST]: (state, action) => ({
    ...state,
    isFetching: true,
    error: null
  }),
  [REPOS_FETCH_SUCCESS]: (state, action) => ({
    ...state,
    isFetching: false,
    data: action.payload
  }),
  [REPOS_FETCH_FAILURE]: (state, action) => ({
    ...state,
    isFetching: false,
    error: action.payload
  })
}, initialState);
