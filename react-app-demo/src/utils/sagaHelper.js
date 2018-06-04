import { call, put } from 'redux-saga/effects';

export default function* fetchEntity(entity, api, payload) {
  let { request, success, failure } = entity;
  if (request) {
    yield put(request());
  }
  const { data, error } = yield call(api, payload);

  if (!error) {
    if (success) {
      yield put(success(data));
    }
  } else {
    if (failure) {
      yield put(failure(error));
    }
  }
}
