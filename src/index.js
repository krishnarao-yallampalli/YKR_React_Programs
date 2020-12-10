import React from "react";
import ReactDOM from "react-dom";

var date = new Date();
var currentTime = date.getHours();

var greeting;

const myStyle = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  myStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  myStyle.color = "green";
} else {
  greeting = "Good Evening";
  myStyle.color = "blue";
}

ReactDOM.render(
  <h1 style={myStyle}>{greeting} </h1>,
  document.getElementById("root")
);
