import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './styles.less';

export default class RepoItem extends PureComponent {
  handleRemove = (repo) => {
    this.props.handleRemove(repo);
  }

  handleFavor = (repo) => {
    this.props.handleFavor(repo);
  }

  render() {
    let { repo, user, index } = this.props;
    let repoName = `/${user}/${repo.get('name')}`;
    let iconHeartClass = 'repoItem__link__favor';
    if (repo.get('isFavorite')) {
      iconHeartClass += ' repoItem__link__favor--favorited';
    }

    if (process.env.NODE_ENV === 'development') {
      console.log(`index: ${index}, repo: ${repoName}: re-rendered.`);
    }

    return (
      <div className="repoItem">
        <span
          className="repoItem__removeIcon"
          onClick={this.handleRemove.bind(this, repo)}>x</span>
        <span> {index}. </span>
        <Link
          className="repoItem__link"
          to={repoName}>{repoName}</Link>
        <span
          className={iconHeartClass}
          onClick={this.handleFavor.bind(this, repo)}>*</span>
      </div>
    );
  }
}
