import styles from "./Login.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../../../Redux/userSlice";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // onAuthStateChanged(auth, (currentUser) => {
  //   if(currentUser){
  //     dispatch(login({
  //       id: currentUser.uid,
  //       email: currentUser.email
  //     }))
  //   }
  // })

  // useEffect(() => {
  //   onAuthStateChanged(auth,(currentUser) => {
  //     if(currentUser){
  //       dispatch(login({
  //         id: currentUser.uid,
  //         email: currentUser.email
  //       }))
  //       localStorage.setItem('vibhusha.authToken', JSON.stringify(currentUser.uid))
  //       localStorage.setItem('vibhusha.emailId', JSON.stringify(currentUser.email))
  //       console.log(currentUser.emailVerified)
  //     }
  //   })
  // }, [])
 
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
      dispatch(
        login({
          payload: user,
        })
      );
      localStorage.setItem("user", JSON.stringify(user));
      if (user){
        router.replace("/")
      }
      else{
        return
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.login_header}>LOGIN FORM</span>
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
            <div className={styles.password}>
              <span>forgot password?</span>
            </div>
            <button type="submit" className={styles.login_button}>
              Login
            </button>
          </form>
        </div>
        <div className={styles.other_details}>
          <span className={styles.enquire}>New to Vibhusha?</span>
          <Link href="/registration">
            <span className={styles.login}>Create an account</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
