import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = () => {
    if (!this.state.name) { return; }
    this.props.history.push(this.state.name);
  }

  render() {
    return (
      <div className="main">
        <input type='text' value={this.state.name} onChange={this.handleChange} />
        <button type='submit' onClick={this.handleSubmit}>go</button>
      </div>
    );
  }
}
