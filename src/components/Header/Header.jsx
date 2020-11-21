import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

export default function header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light border-dark mb-3">
            <div className="container">
                <a className="navbar-brand" href="#">Agile Desk</a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/description'><a className="nav-link" href="#">Description</a></Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link to='/'><a className="nav-link" href="#">Desk</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

