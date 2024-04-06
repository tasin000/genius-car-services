import React from "react";
import google from "./../../../images/social-icons/google.png";
import facebook from "./../../../images/social-icons/facebook.png";
import github from "./../../../images/social-icons/github.png";
import auth from "../../../firebase.init";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const navigate = useNavigate();

  if (googleUser || githubUser) {
    navigate("/");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 "></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "1px" }}
          className="d-flex bg-primary w-50 "
        ></div>
      </div>

      <div>
        {googleError || githubError ? (
          <div>
            <p className="text-danger">Error: {googleError?.message || githubError?.message}</p>
          </div>
        ) : (
          <></>
        )}
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto d-flex justify-content-between align-items-center"
        >
          <img src={google} alt="..." />
          <span className="px-2">Google Sign-in</span>
        </button>
        <button className="btn btn-info w-50 d-block mx-auto my-2 d-flex justify-content-between align-items-center">
          <img src={facebook} alt="..." />
          <span className="px-2">Facebook Sign-in</span>
        </button>
        <button onClick={() => signInWithGithub()} className="btn btn-info w-50 d-block mx-auto d-flex justify-content-between align-items-center">
          <img src={github} alt="..." />
          <span className="px-2">GitHub Sign-in</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
