import {
  REQUEST_REPO,
  RECEIVE_REPO
} from '../constants/ActionTypes';

export default function repos(state = {
  isFetching: false,
  repos: []
}, action) {
  switch (action.type) {
    case REQUEST_REPO:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_REPO:
      return Object.assign({}, state, {
        isFetching: false,
        repos: action.repos
      });
    default:
      return state;
  }
}
