import { createAction, handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

// *********************************
// Actions
// *********************************

export const LANGUAGES_FETCH = 'LANGUAGES_FETCH';
const LANGUAGES_FETCH_REQUEST = 'LANGUAGES_FETCH_REQUEST';
const LANGUAGES_FETCH_SUCCESS = 'LANGUAGES_FETCH_SUCCESS';
const LANGUAGES_FETCH_FAILURE = 'LANGUAGES_FETCH_FAILURE';

// *********************************
// Action Creators
// *********************************

// export to components
export const fetchRepoLanguages = createAction(LANGUAGES_FETCH);

// export to sagas
export const languages = {
  request: createAction(LANGUAGES_FETCH_REQUEST),
  success: createAction(LANGUAGES_FETCH_SUCCESS),
  failure: createAction(LANGUAGES_FETCH_FAILURE)
};

// *********************************
// Reducer
// *********************************

const initialState = fromJS({
  isFetching: false,
  data: [],
  error: null
});

export default handleActions({
  [LANGUAGES_FETCH_REQUEST]: (state, action) => (
    state.set('isFetching', true)
         .set('error', null)
  ),
  [LANGUAGES_FETCH_SUCCESS]: (state, action) => (
    state.set('isFetching', false)
         .set('data', action.payload)
  ),
  [LANGUAGES_FETCH_FAILURE]: (state, action) => (
    state.set('isFetching', false)
         .set('error', action.error)
  )
}, initialState);
