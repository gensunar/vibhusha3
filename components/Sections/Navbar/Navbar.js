import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import SideNav from "./Side Navbar/Sidenav";
import { useSelector } from "react-redux";

export default function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isUser, setIsUser] = useState("");
  const [isMenu, setIsMenu] = useState(false)
  const user = useSelector((state) => state.user.user);

  const toogleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
  };

  useEffect(() => {
    setIsUser(user);
  }, []);
  console.log("first", isUser);
  // console.log("second", user.user.email);
 
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.hamburger} onClick={toogleSideNav}>
            <div className={styles.hamburger_line}></div>
            <div className={styles.hamburger_line1}></div>
            <div className={styles.hamburger_line2}></div>
          </div>
          <Link href="/">
            <a>
              <div className={styles.image}></div>
              <div className={styles.brand}>VIBHUSHA</div>
              {/* <span>{user.user.email}</span> */}
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/products">
                <a>Product</a>
              </Link>
            </li>
            <li>
              <Link href="#footer">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {!isUser ? (
            <div className={styles.login}>
              <button className={styles.login_button}>Login/Signup</button>
            </div>
          ) : (
            <div className={styles.user}>
              <span onClick={() => setIsMenu(!isMenu)} className={styles.user_icon}>User Name</span>
              {isMenu && (
              <div className={styles.dropdown_menu}>
                <span className={styles.menu_item}>My Name</span>
                <span className={styles.menu_item}>Logout</span>
              </div>
              )}
            </div>
          )}
        </div>
        {showSideNav && (
          <div className={styles.side_drawer}>
            <SideNav onCloseSideNavbar={toogleSideNav} />
          </div>
        )}
      </nav>
      {showSideNav && (
        <div className={styles.backdrop} onClick={toogleSideNav}></div>
      )}
    </>
  );
}
