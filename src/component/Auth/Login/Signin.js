import { useDispatch } from "react-redux/es/exports";
import { loginUser } from "../../../utils/apiRequest";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
function Signin({changeAuthMode}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [usename, setusername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const user = {
      username: usename,
      password: password,
    };
    loginUser(user, dispatch, navigate);
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmitLogin}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>User name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="User name"
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signin;
