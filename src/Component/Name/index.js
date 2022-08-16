import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  render() {
    return (
      <div>
        <p>{this.props.data.first_name}</p>
      </div>
    );
  }
}

export default Name;
