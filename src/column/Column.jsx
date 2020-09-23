import React from 'react'
import Task from '../task/task'

export default function column(props) {
    return (
        <div className="d-flex justify-content-between ">
            <div className="col">
                <p>Сделать</p>
                <div>
                    <ul className="list-group mb-5 bg-light border border-dark">
                        <Task 
                        tasks={props.tasks}
                        todo={props.todo}
                        does={props.does}
                        reviewing={props.reviewing}
                        reviewed={props.reviewed}
                        merged={props.merged}/>
                    </ul>
                </div>
            </div>

            <div className="col">
                <p>Делается</p>
                <div>
                    <ul className="list-group mb-5 bg-light border border-dark">
                        <Task />
                    </ul>
                </div>
            </div>

            <div className="col">
                <p>Проверяется</p>
                <div>
                    <ul className="list-group mb-5 bg-light border border-dark">
                        <Task />
                    </ul>
                </div>
            </div>

            <div className="col">
                <p>Проверено</p>
                <div>
                    <ul className="list-group mb-5 bg-light border border-dark">
                        <Task />
                    </ul>
                </div>
            </div>

            <div className="col">
                <p>Включено</p>
                <div>
                    <ul className="list-group mb-5 bg-light border border-dark">
                        <Task />
                    </ul>
                </div>
            </div>
        </div>
    )
}
