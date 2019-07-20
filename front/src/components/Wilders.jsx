import React, { Component } from 'react';

class Wilders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.firstName}</div>;
  }
}

export default Wilders;
