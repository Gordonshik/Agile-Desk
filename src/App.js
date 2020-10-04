import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header.jsx";
import Columns from "./columns/Columns.jsx";

export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <Header />
        <Columns />
      </div>
    );
  }
}
