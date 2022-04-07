import { FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Head from "next/head";
import { useState } from "react";
import SideNav from "./Side Navbar/Sidenav";

export default function Navbar(props) {
  const [showSideNav, setShowSideNav] = useState(false);

  const toogleSideNav = () => {
    setShowSideNav((prevState) => !prevState);
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
            </a>
          </Link>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/"><a>Home</a></Link>
            </li>
            <li>
              <Link href="/about"><a>About</a></Link>
            </li>
            <li>
              <Link href="#footer"><a>Contact</a></Link>
            </li>
            <li>
              <Link href="/"><a>Blog</a></Link>
            </li>
            <span className={styles.login}>
            <li>
              <Link href="/login"><a>Login</a></Link>
            </li>
            </span>
          </ul>
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
