import styles from "./Registration.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { useState } from "react";
import Link from 'next/link'

const Registration = () => {
  const [yourName, setYourName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const NameChangeHandler = (e) => {
    setYourName(e.target.value);
  };

  const EmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordChangeHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const registrationHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("yourName", yourName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.registration_header}>REGISTRATION FORM</span>
          <form className={styles.form} onSubmit={registrationHandler}>
            <InputBox
              placeholder="Enter your full name"
              label="Your Name"
              type="text"
              id="yourname"
              value={yourName}
              onChange={NameChangeHandler}
            />
            <InputBox
              placeholder="Enter your Email"
              label="Email"
              type="email"
              id="email"
              value={email}
              onChange={EmailChangeHandler}
            />
            <InputBox
              placeholder="Enter your password (min 6 characters)"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={PasswordChangeHandler}
            />
            <InputBox
              placeholder="Confirm Password"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={confirmPasswordChangeHandler}
            />
            <button type="submit" className={styles.registration_button}>
              Register
            </button>
          </form>
          <div className={styles.other_details}>
            <span className={styles.enquire}>ALREADY REGISTERED?</span>
            <Link href='/login'><span className={styles.login}>SIGN IN HERE</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
