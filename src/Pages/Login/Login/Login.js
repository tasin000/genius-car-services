import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
      auth
    );
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    return <Navigate to={from} replace />;
  }
  return (
    <>
      <Form onSubmit={handleFormSubmit} className="w-50 container mx-auto">
        <h2 className="text-center text-primary my-3">Please Login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        
        <p>
          Forgot Password? {" "}
          <button className="btn btn-link" onClick={async () => {
            const email = emailRef.current.value;
            if(email){
              await sendPasswordResetEmail(email,);
            toast("Reset Password Link Sent!");
            } else{
              toast("Invalid email!")
            }
          }}>
            Send Reset Link
          </button>
        </p>

        <p>
          New to Genius Car?{" "}
          <Link to="/register" className="text-warning">
            Register now
          </Link>
        </p>
        <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
          Login
        </Button>
        <SocialLogin></SocialLogin>
        <ToastContainer />
      </Form>
    </>
  );
}

export default Login;
