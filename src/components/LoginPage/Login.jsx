import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Register from "../RegisterPage/Register";
import AuthImage from "../AuthImage";

const Login = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      setError(true);
    } else {
      setError(false);
      console.log(formValue);
    }
  };
  return (
    <div className="wrapper">
      <div className="login_container">
        <div className="login">
          <h1>Already have an Account ?</h1>
          <p>Your personal jobfinder is here</p>
          <form className="login_form" onSubmit={handleSubmit}>
            <input
              className="input_box"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formValue.email}
            />

            <input
              className="input_box"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formValue.password}
            />

            <p className="error">
              {error ? "* all fields required in the form" : ""}
            </p>
            <button className="login_btn" onSubmit={handleSubmit}>
              Sign In
            </button>
          </form>
          <div className="footer_desc">
            <span>Don't have an account ?</span>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
      <AuthImage />
    </div>
  );
};

export default Login;