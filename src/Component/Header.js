import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css'

class Header extends Component {

  render() {
    return (
      <>

        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
            <Link to={'/'} className="navbar-brand">Win<span >Kart</span><p>Deliver in Wink Time</p></Link>
            <i className="fa fa-face-smile-wink me-3"></i>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                 <Link className="nav-links" to='/register'><i className="fa fa-user-circle"></i></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-links" to='/notification'><i className="fa fa-bell"></i></Link>
                </li>
                <li className="nav-item">
                  <Link  className="nav-links" to={'/orders'}><i className="fa fa-shopping-cart"></i></Link>
                </li>
               
              </ul>

            </div>
          </div>
        </nav>







      </>
    )
  }


}

export default Header;