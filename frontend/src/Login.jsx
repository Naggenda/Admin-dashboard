import React, { useState } from "react";
import axios from "axios";
import RoutesBrowse from "./Routes/Routes";
// import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const Navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage("Your Username and\nPassword are incorrect.");
    }
  };

  const handleClick = () => {
    Navigate("/register");
  };

  const renderForm = (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white w-25">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Login</button>
          {errorMessage && (
            <p
              className="text-red-500 text-sm whitespace-pre-line text-center mt-4 "
              style={{ color: "red" }}
            >
              {errorMessage}
            </p>
          )}{" "}
        </form>
        <button className="btn btn-default" onClick={handleClick}>
          Register
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {isSubmitted ? (
        <div>
          <RoutesBrowse />
        </div>
      ) : (
        renderForm
      )}
    </div>
  );
}

export default Login;
