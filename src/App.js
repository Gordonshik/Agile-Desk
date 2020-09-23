import React, { Component } from "react";
import "./App.css";
import Header from "./header/Header.jsx";
import Column from "./column/Column.jsx";

export default class App extends Component {
  state = {
    tasksArray: [],
    todoArray: [{
      title: "Сделать Agile Desk",
    description: "Ну короче сделать улыбочку ХЫЫЫЫЫЫЫЫЫ",
    startAt: "",
    finishAt: "",
    step: "1",
    priority: ""
  }],
    doesArray: [],
    reviewingArray: [],
    reviewedArray: [],
    mergedArray: [],
    task: {
      title: "",
      description: "",
      startAt: "",
      finishAt: "",
      step: "",
      priority: "",
    },
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Column
          tasks={this.state.tasksArray}
          todo={this.state.todoArray}
          does={this.state.doesArray}
          reviewing={this.state.reviewingArray}
          reviewed={this.state.reviewedArray}
          merged={this.state.mergedArray}
        />
      </div>
    );
  }
}
