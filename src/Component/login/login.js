import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('rohini@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = () => {
    const url = "https://winkart-login.onrender.com/api/auth/login";

    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          setMessage(data.token);
        } else {
          sessionStorage.setItem('ltk', data.token);
          sessionStorage.setItem('loginStatus', 'loggedIn');
          navigate('/');
        }
      })
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="panel panel-success">
          <div className="panel-heading">
            <h3>Login</h3>
            <h2>{message}</h2>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="email" className='control-label'>Email</label>
                <input className="form-control" id="email" name="email"
                  value={email} onChange={handleEmailChange} />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="password" className='control-label'>Password</label>
                <input className="form-control" id="password" name="password"
                  value={password} onChange={handlePasswordChange} />
              </div>
            </div>
            <button className="btn btn-success" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;
