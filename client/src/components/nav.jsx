import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Nav() {
  return (
    <BrowserRouter basename={""}>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
              <a className="nav-link" href="/class">
                Class
              </a>
              <a className="nav-link" href="/states">
                States
              </a>
              <a className="nav-link" href="/write">
                Write
              </a>
            </div>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default Nav;
