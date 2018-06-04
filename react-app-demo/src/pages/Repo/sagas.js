import { takeLatest, fork } from 'redux-saga/effects';
import api from '../../services/api';
import fetchEntity from '../../utils/sagaHelper';
import * as widgets from './widgets';

const fetchRepoLanguagesCall = fetchEntity.bind(null, widgets.languages, api.fetchRepoLanguages);

function* fetchRepoLanguagesSaga({ payload }) {
  yield fork(fetchRepoLanguagesCall, payload);
}

export default function* sagas() {
  yield takeLatest(widgets.LANGUAGES_FETCH, fetchRepoLanguagesSaga)
}
