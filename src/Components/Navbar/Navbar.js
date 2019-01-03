import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand">rocknegi </a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/Home" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/AboutMe" activeClassName="active">About Me</NavLink></li>
                        <li><NavLink to="/StuffIdo" activeClassName="active">Stuff I Do</NavLink></li>
                        <li><NavLink to="/ContactMe" activeClassName="active">Contact Me</NavLink></li>

                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;