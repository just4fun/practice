import {
  REQUEST_REPO,
  RECEIVE_REPO
} from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

const API_ROOT = 'https://api.github.com/';

function requestRepo(userName) {
  return {
    type: REQUEST_REPO,
    userName
  };
}

function receiveRepo(repos) {
  return {
    type: RECEIVE_REPO,
    repos
  };
}

export function fetchRepos(userName) {
  return dispatch => {
    dispatch(requestRepo(userName));
    return fetch(API_ROOT + `users/${userName}/repos`)
      .then(response => response.json())
      .then(json => dispatch(receiveRepo(json)));
  };
}
