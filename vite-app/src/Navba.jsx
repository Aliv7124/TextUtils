import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

function Navba(props) {

 

  return (
    <>
      <h1 className={`text-center text-${props.mode === "light" ? "dark" : "light"}`}>TextUtils</h1>

     
        <nav className={`navbar navbar-expand-md bg-${props.mode} navbar-${props.mode}`} 
     style={{ paddingTop: "0.2rem", paddingBottom: "0.2rem", minHeight: "10px" }}>


        <div className="container-fluid">
          <Link className={`navbar-brand text-${props.low}`} to="/">
            {props.MyApp}
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/">
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.mode === "light" ? "dark" : "light"}`} to="/about">
              
              
                </Link>
              </li>
            </ul>
          </div>
        </div>
         <div className="form-check form-switch mx-4 my-2">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          onClick={props.low}
          id="switchCheckDefault"
        />
        <label
          className={`form-check-label text-${props.low}`}
          htmlFor="switchCheckDefault"
          id="hi"
        >
          Enable Dark Mode
        </label>
      </div>
      </nav>

     
    </>
  );
}

export default Navba;

