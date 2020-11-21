import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Columns from "./components/Columns/Columns.jsx";
import Description from './components/Description/Description.jsx'
import { Switch, Route } from 'react-router-dom'

export default class App extends Component {
 
  render() {
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Columns}/>
          <Route path='/description' component={Description}/>
        </Switch>
      </div>
    );
  }
}
