import React, { Component, findDOMNode } from 'react';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this._onExplore = this._onExplore.bind(this);
  }
  
  render() {
    return (
      <div>
        <input type='text' ref='input'/>
        <button onClick={this._onExplore}>explore</button>
      </div>
    );
  }

  _getInputValue() {
    return findDOMNode(this.refs.input).value;
  }

  _setInputValue(value) {
    findDOMNode(this.refs.input).value = value;
  }

  _onExplore() {
    let value = this._getInputValue().trim();
    if (value) {
      this.props.onChange(value);
    }
  }
}
