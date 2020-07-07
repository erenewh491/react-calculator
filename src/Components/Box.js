import React, { Component } from "react";
import "./CSS/Box.css";
export class Box extends Component {
  RenderValue = (val) => {
    switch (val) {
      default:
        return val;
      case "/":
        return "÷";
      case "*":
        return "x";
    }
  };

  render() {
    const { value, orange } = this.props;
    return (
      <div>
        <button
          className={"Button " + (orange ? "orange" : "")}
          name={value}
          onClick={() => this.props.ButtonPressed(value)}
        >
          {this.RenderValue(this.props.value)}
        </button>
      </div>
    );
  }
}

export default Box;
