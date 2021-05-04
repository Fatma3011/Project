import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        
          <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark fixed-top">
        <div className="navbar-brand" >
          e-learning
        </div>
        
        <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
        </form>
        <ul className="navbar-nav ml-auto ml-md-0">
          <li className="nav-item dropdown">
            <div
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
            </div>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-item"  >
              <NavLink to="/teacher/profile">
              My profile
                    </NavLink>                  
              </div>
              <div className="dropdown-divider" />
              <div className="dropdown-item" >
              <NavLink   to="/teacher/logout">
              Logout                    </NavLink>
               
              </div>
            </div>
          </li>
        </ul>
      </nav>
     
        
    )
}

export default Navbar