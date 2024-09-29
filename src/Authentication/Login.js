import { React, useState, useEffect } from "react";

import "./Login.css";
import { openEye, closeEye } from "../icons";
// import { logo } from '../Components/Header/data'
// import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { logo } from "../Components/Header/data";

function Login(props) {
  // new
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //     props.setUser(user);
  // })
  useEffect(() => {
    auth.onAuthStateChanged(
      async (user) => {
        if (user) {
          setUser(user);
          //   props.setUser(user);
        }
      },
      [user]
    );
  });
  const Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      window.alert(
        user.user.email + " resgisted successfully. You can login now."
      );
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
    }
  };

  const Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      props.setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      window.alert(error.message);
    }
  };

  const Logout = async () => {
    await signOut(auth);
    console.log("SignOut");
    window.location.reload();
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
    // console.log(showPassword, "show password")
  }

  return (
    <>
      <div
        style={{
          borderBottom: "1px solid rgba(83, 83, 83, 0.198)",
          padding: "10px 25px",
        }}
      >
        {" "}
        {logo}{" "}
      </div>
      <section className="LoginPage">
        <div className="register-css">
          <h3>Register New User</h3>
          <input
            id="emailInput"
            type="text"
            placeholder="Email..."
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <input
            id="emailPassword"
            type="password"
            value={registerPassword}
            placeholder="Password..."
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          {showPassword ? (
            <button onClick={togglePassword}>{openEye}</button>
          ) : (
            <button onClick={togglePassword}>{closeEye}</button>
          )}
          <button id="loginBtn" onClick={Register}>
            Create User
          </button>
        </div>
        <div className="p-3"></div>
        <div className="login-css">
          <h3 className="text-center">Login</h3>
          <input
            id="loginInput"
            type="text"
            placeholder="Email..."
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <input
            id="loginPassword"
            type="password"
            placeholder="Password..."
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <button id="loginBtn" onClick={Login}>
            Login
          </button>
        </div>
        <div style={{ display: "none" }}>
          <h4>User Logged In: </h4>
          {user?.email}
          <button id="loginBtn" onClick={Logout}>
            Sign out
          </button>
        </div>
      </section>
    </>
  );
}
export default Login;
