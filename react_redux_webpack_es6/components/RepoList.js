import React, { Component } from 'react';

export default class RepoList extends Component {
  render() {
    const {
      isFetching, 
      repos, 
      renderRepo 
    } = this.props;

    return (
      <ul>
        {repos.map(renderRepo)}
      </ul>
    );
  }
}
