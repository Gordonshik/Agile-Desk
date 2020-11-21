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
            step: 0,
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
                this.state.todoArray,
                this.state.doesArray,
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
        })
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

    setPrevStage = (task) => {
        switch (task) {
            case 1:
                break;
            case 2:
                this.setState({ todoArray: [...this.reviewingArray, task] })
                alert('В точку!');
                break;
            case 3:
                this.setState({ doesArray: [...this.reviewedArray, task] })
                alert('Перебор');
                break;
            case 4:
                this.setState({ reviewingArray: [...this.mergedArray, task] })
                alert('Перебор');
                break;
            case 5:
                this.setState({ reviewedArray: [...this.mergedArray, task] })
                alert('Перебор');
                break;
            default:
                console.log("Нет таких значений");
        }
    }

    setNextStage = (task) => {
        switch (task.step) {
            case 1:
                let a = [...this.doesArray, task];
                this.setState({ doesArray: a })
                break;
            case 2:
                this.setState({ reviewingArray: [...this.reviewingArray, task] })
                break;
            case 3:
                this.setState({ reviewedArray: [...this.reviewedArray, task] })
                break;
            case 4:
                this.setState({ mergedArray: [...this.mergedArray, task] })
                break;
            case 5:
                break;
            default:
                console.log("Нет таких значений");
        }
    }

    sortedTodoArray(arr) {
        return (arr.map((task) => (
            <li
                className="list-group-item item d-flex justify-content-between"
                key={task.id}
            >
                <i
                    class="fas fa-arrow-left"
                    onClick={this.setPrevStage}></i>
                <p>{task.title}</p>
                <i
                    class="fas fa-arrow-right"
                    onClick={this.setNextStage}
                ></i>
            </li>
        )))
    };

    columns() {
        const numbers = [0, 1, 2, 3, 4]
        let columnsTitles = ['Сделать', 'Делается', 'Проверяется', 'Проверено', 'Включено']
        for (let i = 0; i < 5; i++) {
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
            <div>
                <div className="d-flex justify-content-between">
                    {this.columns()}
                    <div>
                        <div className="modal show" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Создание новой задачи</h5>
                                        <button className="close" data-dismiss="modal">
                                            ×
                </button>
                                    </div>
                                    <div className="modal-body">
                                        <input
                                            className="form-control mb-2"
                                            type="text"
                                            placeholder="Название"
                                            value={this.state.newTitle}
                                            onChange={this.createNewTitle}
                                        ></input>
                                        <input
                                            className="form-control mb-2"
                                            type="text"
                                            placeholder="Описание"
                                            value={this.state.newDescription}
                                            onChange={this.createNewDescription}
                                        ></input>
                                        <div className="input-group mb-2">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Дата начала"
                                                value={this.state.newStartAt}
                                                onChange={this.createNewStartAt}
                                            ></input>
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Дата окончания"
                                                value={this.state.newFinishAt}
                                                onChange={this.createNewFinishAt}
                                            ></input>
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend mb-2">
                                                <button
                                                    className="btn btn-outline-secondary dropdown-toggle"
                                                    type="button"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Этап
                    </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">
                                                        Сделать
                      </a>
                                                    <a className="dropdown-item" href="#">
                                                        Делается
                      </a>
                                                    <a className="dropdown-item" href="#">
                                                        Проверяется
                      </a>
                                                    <a className="dropdown-item" href="#">
                                                        Проверено
                      </a>
                                                    <a className="dropdown-item" href="#">
                                                        Включено
                      </a>
                                                </div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-secondary dropdown-toggle"
                                                        type="button"
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        Приоритет
                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="#">
                                                            Очень низкий
                      </a>
                                                        <a className="dropdown-item" href="#">
                                                            Низкий
                      </a>
                                                        <a className="dropdown-item" href="#">
                                                            Средний
                      </a>
                                                        <a className="dropdown-item" href="#">
                                                            Высокий
                      </a>
                                                        <a className="dropdown-item" href="#">
                                                            Очень высокий
                      </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer justify-content-between">
                                        <button
                                            className="btn btn-primary"
                                            data-dismiss="modal"
                                            onClick={this.createNewTask}
                                        >
                                            Добавить
                  </button>
                                        <button
                                            className="btn btn-primary"
                                            data-dismiss="modal">
                                            Отмена
                  </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="btn btn-dark" data-toggle="modal" data-target="#myModal">Добавить новую задачу</button>
                </div>
            </div>
        );
    }
}
