import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/"> Home </NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/find">Find</NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/add">Add</NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/update">Update</NavLink>
                    <NavLink exact className="nav-item nav-link" activeClassName="active" to="/delete">Delete</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;