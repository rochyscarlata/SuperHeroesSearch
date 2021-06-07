import React, { useState, useEffect } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import superLogo from '../../assets/logo/logoM.jpg'

export default function Header() {
  const [isActive, setisActive] = React.useState(false);

  const history = useHistory();
  console.log(history)

    const handleLogout=()=>{
      localStorage.removeItem('token')
      history.replace('/login')
    }



  return (
    <nav className="navbar is-white " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link class="navbar-item" href="https://bulma.io">
        <img src={superLogo} width="90" height="70x"/>        </Link>
        <a
          onClick={() => {
            setisActive(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-start">
          {/* <NavLink className="navbar-item" to="./home">
            Home
          </NavLink> */}
          <NavLink className="navbar-item" to="/Heroes">
            Heroes
          </NavLink>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <NavLink class="button is-primary" to="/login" onClick={handleLogout}>
                <strong>Logout</strong>
              </NavLink>
            </div>
          </div>

         
        </div>
      </div>
    </nav>
    
  );
}
