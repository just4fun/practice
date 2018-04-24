import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { REPOS_FETCH, fetching, success, failure } from './widgets';

const fetchRepos = (action$) => {
  return action$
    .ofType(REPOS_FETCH)
    .mergeMap(action => {
      let user = action.payload;
      return ajax.get(`https://api.github.com/users/${user}/repos`)
        .map(data => success(data.response))
        .catch(error => Observable.of(failure(error.response)));
    });
};

export default combineEpics(
  fetchRepos
);
