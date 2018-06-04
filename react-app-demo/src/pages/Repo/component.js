import React, { Component } from 'react';
import Loading from '../../components/Loading/Loading';
import './styles.less';

export default class Language extends Component {
  componentDidMount() {
    let {
      user,
      repo
    } = this.props.match.params;
    this.props.fetchRepoLanguages({
      user,
      repo
    });
  }

  render() {
    let { isFetching, data } = this.props;

    return (
      <div className="main">
        {isFetching ? (
          <Loading />
        ) : (
          <ul>
            {Object.keys(data).map((key, index) => (
              <li key={index}>{`${key}: ${data[key]}`}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
