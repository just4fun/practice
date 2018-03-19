import React, { Component } from 'react';

export default class Repo extends Component {
  render() {
    const { repo } = this.props;

    return (
      <li>{repo.full_name}</li>
    );
  }
}
