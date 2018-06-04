import { takeLatest, fork } from 'redux-saga/effects';
import api from '../../services/api';
import fetchEntity from '../../utils/sagaHelper';
import * as widgets from './widgets';

const fetchReposCall = fetchEntity.bind(null, widgets.repos, api.fetchRepos);
const addRepoCall = fetchEntity.bind(null, widgets.add, api.addRepo);
const removeRepoCall = fetchEntity.bind(null, widgets.remove, api.removeRepo);
const favorRepoCall = fetchEntity.bind(null, widgets.favor, api.favorRepo);

function* fetchReposSaga({ payload }) {
  yield fork(fetchReposCall, payload);
}

function* addRepoSaga({ payload }) {
  yield fork(addRepoCall, payload);
}

function* removeRepoSaga({ payload }) {
  yield fork(removeRepoCall, payload);
}

function* favorRepoSaga({ payload }) {
  yield fork(favorRepoCall, payload);
}

export default function* sagas() {
  yield takeLatest(widgets.REPOS_FETCH, fetchReposSaga)
  yield takeLatest(widgets.REPO_ADD, addRepoSaga)
  yield takeLatest(widgets.REPO_REMOVE, removeRepoSaga)
  yield takeLatest(widgets.REPO_FAVOR, favorRepoSaga)
}
