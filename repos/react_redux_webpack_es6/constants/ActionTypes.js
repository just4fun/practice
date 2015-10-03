import keyMirror from 'react/lib/keyMirror';

const ActionTypes = keyMirror({
  REQUEST_REPO: null,
  RECEIVE_REPO: null,
  FAILURE_REPO: null,

  REQUEST_LANGUAGE: null,
  RECEIVE_LANGUAGE: null,
  FAILURE_LANGUAGE: null
});

export default ActionTypes;
