import styles from "./Login.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../../firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../../../../Redux/Slices/userSlice";
import { FaGalacticSenate } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            user,
          })
        );
        localStorage.setItem("user", JSON.stringify(user));
      }
      console.log("first", user);
      if (user) {
        router.replace("/");
      } else {
        return;
      }
    });
  }, [dispatch,router]);

  const EmailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const PasswordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email) {
      setError("*Email cannot be empty");
    } else if (!password) {
      setError("Password cannot be empty");
    }
    try {
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.login_header}>LOGIN FORM</span>
          {error && <span className={styles.empty}>{error}</span>}
          <form className={styles.form} onSubmit={loginHandler}>
            <div className={styles.input_box}>
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
            {loading ? (
              <button type="submit" className={styles.login_button}>
                Logging In....
              </button>
            ) : (
              <button type="submit" className={styles.login_button}>
                Login
              </button>
            )}
          </form>
        </div>
        <div className={styles.other_details}>
          <span className={styles.enquire}>New to Vibhusha?</span>
          <Link href="/registration" passHref>
            <span className={styles.login}>Create an account</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
