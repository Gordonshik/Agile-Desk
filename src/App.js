import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header.jsx";
import Column from "./column/Column.jsx";

export default class App extends Component {
 
  render() {
    return (
      <div className="App">
        <Header />
        <Column />
      </div>
    );
  }
}
