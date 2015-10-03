import React, { Component } from 'react';
import { fetchRepos } from '../actions';
import Explore from './Explore';
import RepoList from './RepoList';
import Repo from './Repo';

export default class Searchub extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._renderRepo = this._renderRepo.bind(this);
  }

  render() {
    const { isFetching, repos } = this.props;
    return (
      <div>
        <Explore onChange={this._handleChange} />
        {isFetching &&
          <h2>Loading repos...</h2>
        }
        {!isFetching && repos.length > 0 &&
          <RepoList repos={repos} renderRepo={this._renderRepo} />
        }
      </div>
    );
  }

  _handleChange(nextValue) {
    this.props.dispatch(fetchRepos(nextValue));
  }

  _renderRepo(repo) {
    return (
      <Repo repo={repo} key={repo.id} />
    );
  }
}
