import React, { Component } from 'react'
import "./Tasks.css"

export default class Tasks extends Component {
    state = {
        tasksArray: [],
        todoArray: [
          {
            title: "Сделать Agile Desk",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
            startAt: "",
            finishAt: "",
            step: "1",
            priority: "",
          },
          {
            title: "Проверить отображение массива",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
            startAt: "",
            finishAt: "",
            step: "1",
            priority: "",
          },
          {
            title: "Уехать",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
            startAt: "",
            finishAt: "",
            step: "1",
            priority: "",
          },
        ],
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
    
      sortedTodoArray = this.state.todoArray.map((todo) => (
        <li className="list-group-item item">
            <p>{todo.title}</p>
        </li>
      ));
    
      fullTodoInformation = this.state.todoArray.map((todo) => (
        
          <div>
            <p>{todo.title}</p>
            <div>
            <p>{todo.description}</p>
            
            {todo.startAt}
            {todo.finishAt}
            {todo.step}
            {todo.priority}
            </div>
          </div>
        
      ));
    
      


        
    render() {
        return (
            <div>
                {this.sortedTodoArray}
            </div>
        )
    }
}
