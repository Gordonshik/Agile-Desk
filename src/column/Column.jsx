import React, { useState } from 'react'
import Tasks from '../tasks/Tasks'

export default function column(props) {

    return (
        <div className="d-flex justify-content-between ">
            <div className="col">
                <p>Сделать</p>
                <div>
                    <ul className="list-group bg-info border border-dark">
                        <Tasks />
                    </ul>
                    <button class="btn btn-outline border-dark col" type="button" data-toggle="modal" data-target="#myModal">Добавить задачу</button>
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
                            <button class="close" data-dismiss="modal">×</button>
                        </div>
                        <div class="modal-body">
                            <input class="form-control mb-2" type="text" placeholder="Название"></input>
                            <input class="form-control mb-2" type="text" placeholder="Описание"></input>
                            <div class="input-group mb-2">
                                <input class="form-control" type="text" placeholder="Full Name"></input>
                                <input class="form-control" type="email" placeholder="Email"></input>
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Этап</button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="#">Сделать</a>
                                            <a class="dropdown-item" href="#">Делается</a>
                                            <a class="dropdown-item" href="#">Проверяется</a>
                                            <a class="dropdown-item" href="#">Проверено</a>
                                            <a class="dropdown-item" href="#">Включено</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <div class="modal-footer">
                            <button class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
