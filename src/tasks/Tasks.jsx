import React from 'react'
import "./Tasks.scss"

export default function Tasks(props) {

  return (
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
              value={props.newTitle}
              onChange={props.createNewTitle}
            ></input>
            <input
              class="form-control mb-2"
              type="text"
              placeholder="Описание"
              value={props.newDescription}
              onChange={props.createNewDescription}
            ></input>
            <div class="input-group mb-2">
              <input
                class="form-control"
                type="text"
                placeholder="Дата начала"
                value={props.newStartAt}
                onChange={props.createNewStartAt}
              ></input>
              <input
                class="form-control"
                type="email"
                placeholder="Дата окончания"
                value={props.newFinishAt}
                onChange={props.createNewFinishAt}
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
        </div>
      </div>
    </div>
  )
}
