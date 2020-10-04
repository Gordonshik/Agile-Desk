import Tasks from "../tasks/Tasks";
import React, { Component } from "react"
import './Columns.scss'

export default class Column extends Component {

    state = {
        tasksArray: [],
        todoArray: [
            {
                title: "Сделать Agile Desk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
                startAt: "",
                finishAt: "",
                step: 1,
                priority: "",
                id: 1
            },
            {
                title: "Проверить отображение массива",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
                startAt: "",
                finishAt: "",
                step: 1,
                priority: "",
                id: 2
            },
            {
                title: "Уехать",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus unde veniam harum magnam molestias dignissimos ",
                startAt: "",
                finishAt: "",
                step: 1,
                priority: "",
                id: 3
            }
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
            priority: ""
        },
        newTask: {},
        newTitle: "",
        newDescription: "",
        newStartAt: "",
        newFinishAt: "",
        newStep: 0,
        newPriority: ""
    }

    setPrevStage = (task) => {
        task.step -= 1
    }

    setNextStage = (task) => {
        task.step += 1
    }

    componentWillMount() {
        this.setState({
            tasksArray: [
                this.state.todoArray,
                this.state.doesArray,
                this.state.reviewingArray,
                this.state.reviewedArray,
                this.state.mergedArray
            ]
        })
    }

    createNewTask = () => {
        this.addNewTask();
        this.clearForms();
        this.setState({
            tasksArray: [
                ...this.state.tasksArray,
                this.state.todoArray,
                this.state.reviewingArray,
                this.state.reviewedArray,
                this.state.mergedArray
            ]
        })
    }

    addNewTask = () => {
        this.setState({
            todoArray: [
                ...this.state.todoArray, {
                    title: this.state.newTitle,
                    description: this.state.newDescription,
                    startAt: this.state.newStartAt,
                    finishAt: this.state.newFinishAt,
                    step: this.state.newStep,
                    priority: this.state.newPriority,
                    id: Date.now()
                }]
        })
    }

    clearForms = () => {
        this.setState({
            newTitle: '',
            newDescription: '',
            newStartAt: '',
            newFinishAt: '',
            newStep: 0,
            newPriority: '',
            id: 0
        }
        )
    }

    createNewTitle = (event) => {
        this.setState({ newTitle: event.target.value });
    }

    createNewDescription = (event) => {
        this.setState({ newDescription: event.target.value });
    }

    createNewStartAt = (event) => {
        this.setState({ newStartAt: event.target.value });
    }

    createNewFinishAt = (event) => {
        this.setState({ newFinishAt: event.target.value });
    }

    sortedTodoArray(arr) {
        return (arr.map((task) => (
            <li
                className="list-group-item item d-flex justify-content-between"
                key={task.id}
            >
                <i class="fas fa-arrow-left"></i>
                <p>{task.title}</p>
                <i
                    class="fas fa-arrow-right"
                ></i>
            </li>
        )))
    };

    columns() {

        const numbers = [0, 1, 2, 3, 4]
        let columnsTitles = ['Сделать', 'Делается', 'Проверяется', 'Проверено', 'Включено']

        for(let i = 0; i < 5; i++) {
            return (numbers.map((task) => (
                <div className="col">
                    <p>{columnsTitles[task]}</p>
                    <div>
                        <ul className="list-group bg-light border border-dark">
                            {this.sortedTodoArray(this.state.tasksArray[task])}
                        </ul>
                    </div>
                </div>
            )))
        }
        
    }

    render() {
        return (
            <div className="d-flex justify-content-between ">
                {this.columns()}
                <Tasks 
                newTask={this.state.newTask}
                newTitle={this.state.newTitle}
                newDescription={this.state.newDescription}
                newStartAt={this.state.newStartAt}
                newFinishAt={this.state.newFinishAt}
                newStep={this.state.newStep}
                newPriority={this.state.newPriority} />
            </div>
        );
    }
}
