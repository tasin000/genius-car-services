import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
  };
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center", margin: "10px" }}>Please register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="name" placeholder="Your name" />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Create password"
          required
        />
        <p>
          Already registered?{" "}
          <Link className="text-warning" to="/login">
            Login now
          </Link>
        </p>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
