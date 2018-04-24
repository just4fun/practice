import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchRepos } from './widgets';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleClick = () => {
    this.props.fetchRepos(this.state.name);
  }

  render() {
    let { isFetching, data, error } = this.props;
    return (
      <div>
        <input type='text' value={this.state.name} onChange={this.handleChange} />
        <button type='submit' onClick={this.handleClick}>go</button>
        {isFetching && (
          <div>Loading...</div>
        ) || (
          <ul>
            {data.map((repo, index) => <li key={index}>{repo.name}</li>)}
          </ul>
        )}
        {error && (
          <div>Not found</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ isFetching, data, error }) {
  return {
    isFetching,
    data,
    error
  }
}

export default connect(mapStateToProps, {
  fetchRepos
})(App);
