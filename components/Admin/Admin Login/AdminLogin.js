import styles from "./AdminLogin.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import InputBox from "../../Utils/UI/InputBox/InputBox";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../../firebase'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const EmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      if (!email) {
        setError("*Email cannot be empty");
      } else if (!password) {
        setError("Password cannot be empty");
      }
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.login_header}>ADMIN LOGIN</span>
          <form className={styles.form} onSubmit={loginHandler}>
            <div className={styles.input_box}>
              {error && <span className={styles.empty}>{error}</span>}
              <InputBox
                placeholder="Enter your Email"
                label="Email*"
                type="email"
                id="email"
                value={email}
                onChange={EmailChangeHandler}
              />
            </div>
            <div className={styles.input_box}>
              <InputBox
                placeholder="Enter your password"
                label="Password*"
                type="password"
                id="password"
                value={password}
                onChange={PasswordChangeHandler}
              />
            </div>
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;