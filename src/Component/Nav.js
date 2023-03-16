import React,{ useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Nav.css';
const url = "http://winkart-login.onrender.com/api/auth/userinfo";

const Nav= ()=> {
  const [userData, setUserData] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('ltk');
    sessionStorage.setItem('loginStatus', 'loggedOut');
    setUserData('');
    navigate('/');
  };

  const conditionalHeader = () => {
    if (userData.name) {
      let data = userData;
      sessionStorage.setItem('userInfo', JSON.stringify(data));
      return (
        <div id="social">
          <Link to="/" className="btn btn-warning">
            <span className="glyphicon glyphicon-user"></span> Hi {data.name}
          </Link>{" "}
          &nbsp;
          <button className="btn btn-danger" onClick={handleLogout}>
            <span className="glyphicon glyphicon-log-out"></span> LogOut
          </button>
        </div>
      );
    } else {
      return (
        <div id="social">
          <Link to="/login" className="btn btn-warning">
            <span className="glyphicon glyphicon-log-in"></span> Login
          </Link>{" "}
          &nbsp;
          <Link to="/register" className="btn btn-success">
            <span className="glyphicon glyphicon-user"></span> Register
          </Link>
        </div>
      );
    }
  };

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      });
  }, []);

  return (
    <header>
      <div id="brand">
        WinKart &nbsp;{" "}
        <Link className="btn btn-info" to="/">
          Home
        </Link>
      </div>
      {conditionalHeader()}
    </header>
  );
}

export default Nav;
