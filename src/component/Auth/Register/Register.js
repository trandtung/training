import { useState } from "react";
import axios from "axios";

function Register({ changeAuthMode }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpw, setConfirmpw] = useState("");
  const [valueda, setValueda] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmpw) setValueda("sai mk");
    else if (!username && !password && !confirmpw)
      setValueda("Vui long dien day du");
    else {
      setValueda("");
      axios
        .post("https://www.task-manager.api.mvn-training.com/auth/register", {
          username: username,
          password: password,
        })
        .then((res) => {
          res.status === 201 ? alert("Success") : alert("failed");
        });
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Register</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Usename</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Email Address"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              onChange={(e) => {
                setConfirmpw(e.target.value);
              }}
            />
          </div>
          <label>{valueda}</label>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleRegister}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
