import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import RepoItem from '../../components/RepoItem/RepoItem';
import './styles.less';

export default class User extends Component {
  componentDidMount() {
    this.props.fetchRepos(this.props.user);
  }

  handleClick = () => {
    let id = Math.random();
    if (process.env.NODE_ENV === 'test') {
      id = '9527';
    }
    this.props.addRepo({
      id,
      name: 'yet_another_repo'
    });
  }

  handleRemove = (repo) => {
    this.props.removeRepo(repo);
  }

  handleFavor = (repo) => {
    this.props.favorRepo(repo);
  }

  render() {
    let { isFetching, data, user } = this.props;

    return (
      <div className="main">
        {isFetching ? (
          <Loading />
        ) : (
          <div>
            <div>
              {data.map((repo, index) => (
                <RepoItem
                  key={index}
                  index={index}
                  // https://reactjs.org/docs/render-props.html#be-careful-when-using-render-props-with-reactpurecomponent
                  //
                  // If we use `handleRemove={(repo) => this.handleRemove(repo)}` here, every `RepoItem` will be re-rendered
                  // even we used `PureComponent`.
                  handleRemove={this.handleRemove}
                  handleFavor={this.handleFavor}
                  user={user}
                  repo={repo} />
              ))}
            </div>
            <button
              className="repoAdd__button"
              onClick={this.handleClick}>Add new one</button>
          </div>
        )}
      </div>
    );
  }
}
