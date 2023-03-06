import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const url = "https://winkart-login.onrender.com/api/auth/register"

const Register = () => {
  const [formData, setFormData] = useState({
    name: 'sachin',
    email: 'sachin@gmail.com',
    password: '12345678',
    phone: 1111,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(() => navigate('/'));
  };

  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3>Register</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-6 form-group">
                <label htmlFor="fname" className="control-label">FirstName</label>
                <input
                  className="form-control"
                  id="fname"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="email" className="control-label">Email</label>
                <input
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="password" className="control-label">Password</label>
                <input
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 form-group">
                <label htmlFor="phone" className="control-label">Phone</label>
                <input
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <Link to="/login">Already Registered, Click Here</Link>
            <button className="btn btn-success" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
