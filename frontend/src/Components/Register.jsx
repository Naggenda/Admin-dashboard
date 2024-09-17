import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })  
    const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8081/register', values)
    .then(res => console.log(res))
    .then(err => console.log(err))
  };
  const handleclick = (e) => {
    e.preventDefault();
    Navigate('/login');
  }
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              placeholder="John Deo"
              className="form-control"
              onChange={(e) => setValues({...values, name: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="johndeo@gmail.com"
              className="form-control"
              onChange={(e) => setValues({...values, email: e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="***********"
              className="form-control"
              onChange={(e) => setValues({...values, password: e.target.value})}
            />
          </div>
          <button className="btn btn-success">Register</button>
        </form>
        <button className="btn btn-default" onClick={handleclick}>Login</button>
      </div>
    </div>
  );
}

export default Register;
