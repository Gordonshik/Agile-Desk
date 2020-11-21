import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Columns from "./components/Columns/Columns.jsx";
import Description from './components/Description/Description.jsx'

export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <Header />
        <Description />
      </div>
    );
  }
}
