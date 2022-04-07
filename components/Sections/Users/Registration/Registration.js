import styles from "./Registration.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { local_url } from "../../../../constants/url";
import { useRouter } from "next/router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase";

const Registration = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  
  // const NameChangeHandler = (e) => {
  //   setDisplayName(e.target.value);
  // };

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

    // const formData = new FormData();
    // formData.append("displayName", displayName);
    // formData.append("email", email);
    // formData.append("password", password);
    // formData.append("confirmPassword", confirmPassword);
    const validatePassword = () => {
      let isValid = true;
      if (password !== "" && confirmPassword !== "") {
        if (password !== confirmPassword) {
          isValid = false;
          return setError("Password & Confirm Password do not match");
        }
      }
      return isValid;
    };

    try {
      //Password Combination

      if (!email ) {
        return setError("*Email cannot be empty");
      }
      else if (!password) {
        return setError("*Password cannot be empty")
      }
      else if (!confirmPassword){
        return setError("*Confirm Password cannot be empty")
      }
      if (validatePassword()) {
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user);
        if(user){
          setIsSuccess("Registration Successful")
        }
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message)
    }

    // const response = await fetch(`${local_url}/admin/registration`, {
    //   method: "POST",
    //   body: formData,
    // });
    // const data = await response.json();
    // console.log(data);
    // if (data.errorMessage) {
    //   setIsError(true)
    //   console.log((data.errorMessage.message));
    // }
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.registration_header}>NEW USER</span>
          <form className={styles.form} onSubmit={registrationHandler}>
            {/* <div className={styles.input_box}> */}
              {/* <InputBox
                placeholder="Enter your full name"
                label="Display Name*"
                type="text"
                id="displayname"
                value={displayName}
                onChange={NameChangeHandler}
              /> */}
            {/* </div> */}
            <div className={styles.input_box}>
              <div className={styles.success}>
            {isSuccess && (
                <span className={styles.success}>{isSuccess}</span>
              )}
              </div>
              {error && <span className={styles.error}>{error}</span>}
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
                placeholder="Enter your password (min 6 characters)"
                label="Password*"
                type="password"
                id="password"
                value={password}
                onChange={PasswordChangeHandler}
              />
            </div>
            <div className={styles.input_box}>
              <InputBox
                placeholder="Confirm Password"
                label="Confirm Password*"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={confirmPasswordChangeHandler}
              />
            </div>
            <button type="submit" className={styles.registration_button}>
              Register
            </button>
          </form>
        </div>
        <div className={styles.other_details}>
          <span className={styles.enquire}>Already Registered?</span>
          <Link href="/login">
            <span className={styles.login}>Login Here</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Registration;
