import React from "react";
//import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div style={HeadingStyle}>
        <h2>Calculator</h2>
      </div>
    </div>
  );
}

const HeadingStyle = {
  background: "#888",
  color: "#ffff",
  padding: "1px",
  margin: 0,
  height: "9vh",
};
