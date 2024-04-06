import React, { useState } from "react";
import "./Register.css";
import { Link, Navigate, useLocation } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../../Shared/Loading/Loading";


const Register = () => {
  const [agree, setAgree] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    createUser,
    createLoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth,);
  const [updateProfile, updateUpdating, updateError] = useUpdateProfile(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  if(updateUpdating){
    return <Loading></Loading>
  }

  if (createUser) {
    console.log(createUser);
    return <Navigate to={from} replace />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name,});
    const success = await sendEmailVerification();
    if(success){
      alert("Verification email sent!");
    }
    alert("Updated profile");
  };

  if (createUser) {
    return <Navigate to="/login" replace />;
  }
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

        <input type="checkbox" name="terms" id="terms" />
        <label onClick={() => setAgree(!agree)} htmlFor="terms">
          I agree with the terms & conditions
        </label>
        <p className={`ps-2 ${agree ? "text-success" : "text-danger"}`}>
          Already registered?{" "}
          <Link className="text-warning mt-2" to="/login">
            Login now
          </Link>
        </p>
        <input
          className="btn btn-primary w-50 d-block mb-2"
          type="submit"
          value="Register"
          disabled={!agree}
        />
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
