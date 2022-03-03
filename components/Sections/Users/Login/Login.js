import styles from "./Login.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { useState } from "react";
import Link from 'next/link'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const EmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.login_header}>LOGIN FORM</span>
          <form className={styles.form} onSubmit={loginHandler}>
            <InputBox
              placeholder="Enter your Email"
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={EmailChangeHandler}
            />
            <InputBox
              placeholder="Enter your password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={PasswordChangeHandler}
            />
            <button type="submit" className={styles.login_button}>
              Register
            </button>
          </form>
          <div className={styles.other_details}>
            <span className={styles.enquire}>NEW TO VIBHUSHA?</span>
            <Link href='/registration'><span className={styles.login}>SIGNUP HERE</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
