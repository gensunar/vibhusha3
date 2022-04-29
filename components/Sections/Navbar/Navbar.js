import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Head from "next/head";
import { useState, useEffect } from "react";
import SideNav from "./Side Navbar/Sidenav";
import { useSelector } from "react-redux";
import {
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiOutlineLogin,
} from "react-icons/hi";
import { useDispatch } from "react-redux";
import { logout } from '../../../Redux/userSlice'

export default function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isUser, setIsUser] = useState(null);
  const [isMenu, setIsMenu] = useState(false);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const toogleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setIsUser(userData);
    } else {
      setIsUser(null);
    }
  }, []);
  // console.log("second", user.user.email);
  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('user')
  };

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
              <Link href="/login">
                <button className={styles.login_button}>Login/Signup</button>
              </Link>
              <span className={styles.login_icon}>
                <HiOutlineLogin />
              </span>
            </div>
          ) : (
            <div className={styles.user}>
              <div className={styles.cart}>
                <span className={styles.cart_icon}>
                  <HiOutlineShoppingBag />
                </span>
                <span className={styles.badge}>21</span>
              </div>
              <div className={styles.user_details}>
                <span
                  className={styles.user_icon}
                  onClick={() => setIsMenu(!isMenu)}
                >
                  <HiOutlineUserCircle />
                </span>
                <span className={styles.account}>Account</span>
              </div>
              {isMenu && (
                <div className={styles.dropdown_menu}>
                  <span className={styles.info}>Welcome!</span>
                  <span className={styles.menu_item}>
                    {isUser.user.displayName}
                  </span>
                  <span className={styles.menu_item}>My Profile</span>
                  <hr />
                  <button className={styles.logout} onClick={handleLogout}>
                    Logout
                  </button>
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
