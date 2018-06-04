import request from '../utils/request';

const API_ROOT = 'https://api.github.com';

function callApi(endpoint) {
  return request(`${API_ROOT}/${endpoint}`);
}

export default {
  fetchUser: user => callApi(`users/${user}`),

  fetchRepos: user => callApi(`users/${user}/repos`),

  fetchRepoLanguages: ({ user, repo }) => callApi(`repos/${user}/${repo}/languages`),

  // Simulate ajax calls for repo operations.
  addRepo: repo => new Promise(resolve => setTimeout(() => resolve({ data: repo }), 1000 * 0)),

  // One thing need to notice is that the data from backend API is always not immutable object,
  // that means we should return JavaScript plain object here.
  removeRepo: repo => new Promise(resolve => setTimeout(() => resolve({ data: { id: repo.get('id') } }), 1000 * 0)),

  favorRepo: repo => new Promise(resolve => {
    let newRepo = {
      id: repo.get('id'),
      isFavorite: !repo.get('isFavorite')
    };
    setTimeout(() => resolve({ data: newRepo }), 1000 * 0)
  })
};
