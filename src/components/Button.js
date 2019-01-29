import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <input
        type="button"
        style={{ height: "50px", width: "100px", backgroundColor: "blue" }}
        onClick={this.props.onClick}
        value={this.props.value}
      />
    );
  }
}

export default Button;
