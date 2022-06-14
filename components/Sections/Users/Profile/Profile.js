import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "../../../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [isUser, setIsUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setIsUser(currentUser);
    });
    // const userData = JSON.parse(localStorage.getItem("user"));
    // if(userData){
    //   setIsUser(userData)
    // }else{
    //   setIsUser(null)
    // }
  }, [isUser]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.details_container}>
          <header className={styles.account}>My Account({isUser.displayName})</header>
          <ul className={styles.items}>
            <Link href="/">
              <li><a>My Profile</a></li>
            </Link>
            <Link href="/">
              <li><a>My Address Book</a></li>
            </Link>
            <Link href="/">
              <li><a>My Orders</a></li>
            </Link>
            <Link href="/">
              <li><a>Settings</a></li>
            </Link>
          </ul>
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Profile;

{
  /* <span>Account</span>
          <span className={styles.profile_name}>{isUser ?(<span>{isUser.displayName}</span>):(<span>No Name</span>)}</span> */
}
