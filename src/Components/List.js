import React, { Component } from "react";
import Box from "./Box";
import "./CSS/List.css";
import { create, all } from "mathjs";
const math = create(all, {});
export class List extends Component {
  constructor(props) {
    super(props);
    this.InputBox = React.createRef();
  }
  InputValue = "0";
  //functions
  isNumber = (item, IsDigits = false) => {
    return IsDigits
      ? /[0-9]|\(|\)|%|\/|\*|\.|-|\++/.test(item)
      : /[0-9]+/.test(item);
  };

  ButtonPressed = (val) => {
    if (this.InputValue === "Error") this.InputValue = "0";
    const IsNum = this.isNumber(val, true);
    switch (IsNum) {
      case true:
        if (
          val === "0" &&
          this.InputValue === "0" &&
          this.isNumber(val) &&
          val !== "(" &&
          val !== ")"
        )
          return;
        if (
          !this.isNumber(
            this.InputValue.slice(
              this.InputValue.length - 1,
              this.InputValue.length
            )
          ) &&
          this.InputValue.slice(
            this.InputValue.length - 1,
            this.InputValue.length
          ) !== "%" &&
          !this.isNumber(val) &&
          val !== "%"
        )
          return;
        if (val === "." && this.InputValue.includes(".")) return;
        this.InputValue =
          this.InputValue === "0" && val !== "." ? val : this.InputValue + val;
        break;
      case false:
        switch (val) {
          case "AC":
            this.InputValue = "0";
            break;
          case "=":
            while (this.InputValue.includes("%")) {
              this.InputValue = this.InputValue.replace("%", "/100");
            }
            try {
              this.InputValue = math.evaluate(this.InputValue).toString();
            } catch (err) {
              this.InputValue = "Error";
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    this.InputBox.current.value = this.InputValue;
  };

  //render

  render() {
    return (
      <div className="Main">
        <input
          type="text"
          disabled
          value={this.InputValue}
          ref={this.InputBox}
        />
        <div className="Section">
          <div className="row">
            <Box value="(" orange ButtonPressed={this.ButtonPressed} />
            <Box value="7" ButtonPressed={this.ButtonPressed} />
            <Box value="4" ButtonPressed={this.ButtonPressed} />
            <Box value="1" ButtonPressed={this.ButtonPressed} />
            <Box value="0" ButtonPressed={this.ButtonPressed} />
          </div>
          <div className="row">
            <Box value=")" orange ButtonPressed={this.ButtonPressed} />
            <Box value="8" ButtonPressed={this.ButtonPressed} />
            <Box value="5" ButtonPressed={this.ButtonPressed} />
            <Box value="2" ButtonPressed={this.ButtonPressed} />
            <Box value="." ButtonPressed={this.ButtonPressed} />
          </div>
          <div className="row">
            <Box value="%" orange ButtonPressed={this.ButtonPressed} />
            <Box value="9" ButtonPressed={this.ButtonPressed} />
            <Box value="6" ButtonPressed={this.ButtonPressed} />
            <Box value="3" ButtonPressed={this.ButtonPressed} />
            <Box value="=" ButtonPressed={this.ButtonPressed} />
          </div>
          <div className="row">
            <Box value="AC" orange ButtonPressed={this.ButtonPressed} />
            <Box value="/" orange ButtonPressed={this.ButtonPressed} />
            <Box value="*" orange ButtonPressed={this.ButtonPressed} />
            <Box value="-" orange ButtonPressed={this.ButtonPressed} />
            <Box value="+" orange ButtonPressed={this.ButtonPressed} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;
