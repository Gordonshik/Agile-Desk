import Tasks from "../tasks/Tasks";
import React, { Component } from "react";

export default class Column extends Component {

    state = {
        newTask: {},
        newTitle: "",
        newDescription: "",
        newStartAt: "",
        newFinishAt: "",
        newStep: 0,
        newPriority: "",
    }

    createNewTask = () => {
        this.setState({
            newTask: {
                newTitle: this.state.newTitle,
                newDescription: this.state.newDescription,
                newStartAt: this.state.newStartAt,
                newFinishAt: this.state.newFinishAt,
                newStep: this.state.newStep,
                newPriority: this.state.newPriority
            }
        });
        this.clearForms();
    }

    clearForms = () => {
        this.setState({
                newTitle: '',
                newDescription: '',
                newStartAt: '',
                newFinishAt: '',
                newStep: 0,
                newPriority: ''
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

    render() {
        return (
            <div className="d-flex justify-content-between ">
                <div className="col">
                    <p>Сделать</p>
                    <div>
                        <ul className="list-group bg-info border border-dark">
                            <Tasks />
                        </ul>
                        <button
                            class="btn btn-outline border-dark col"
                            type="button"
                            data-toggle="modal"
                            data-target="#myModal"
                        >
                            Добавить задачу
            </button>
                    </div>
                </div>

                <div className="col">
                    <p>Делается</p>
                    <div>
                        <ul className="list-group bg-light border border-dark">
                            <Tasks />
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <p>Проверяется</p>
                    <div>
                        <ul className="list-group bg-light border border-dark">
                            <Tasks />
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <p>Проверено</p>
                    <div>
                        <ul className="list-group bg-light border border-dark">
                            <Tasks />
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <p>Включено</p>
                    <div>
                        <ul className="list-group bg-light border border-dark">
                            <Tasks />
                        </ul>
                    </div>
                </div>

                <div class="modal show" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Создание новой задачи</h5>
                                <button class="close" data-dismiss="modal">
                                    ×
                </button>
                            </div>
                            <div class="modal-body">
                                <input
                                    class="form-control mb-2"
                                    type="text"
                                    placeholder="Название"
                                    value={this.state.newTitle}
                                    onChange={this.createNewTitle}
                                ></input>
                                <input
                                    class="form-control mb-2"
                                    type="text"
                                    placeholder="Описание"
                                    value={this.state.newDescription}
                                    onChange={this.createNewDescription}
                                ></input>
                                <div class="input-group mb-2">
                                    <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Дата начала"
                                        value={this.state.newStartAt}
                                        onChange={this.createNewStartAt}
                                    ></input>
                                    <input
                                        class="form-control"
                                        type="email"
                                        placeholder="Дата окончания"
                                        value={this.state.newFinishAt}
                                        onChange={this.createNewFinishAt}
                                    ></input>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button
                                            class="btn btn-outline-secondary dropdown-toggle"
                                            type="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Этап
                    </button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">
                                                Сделать
                      </a>
                                            <a class="dropdown-item" href="#">
                                                Делается
                      </a>
                                            <a class="dropdown-item" href="#">
                                                Проверяется
                      </a>
                                            <a class="dropdown-item" href="#">
                                                Проверено
                      </a>
                                            <a class="dropdown-item" href="#">
                                                Включено
                      </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal-footer">
                                <div className="d-flex justify-content-between">
                                    <button 
                                    class="btn btn-secondary" 
                                    data-dismiss="modal"
                                    onClick={this.createNewTask}>
                                        Создать
                </button>
                                    <button class="btn btn-secondary" data-dismiss="modal">
                                        Close
                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
