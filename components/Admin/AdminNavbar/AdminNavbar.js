import Link from "next/link";
import styles from "./AdminNavbar.module.css";
import Image from "next/image";
import Head from 'next/head'

export default function AdminNavbar() {
  return (
    <>
      <Head>
        <title>Admin:Vibhusha</title>
      </Head>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
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
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#footer">Contact</Link>
            </li>
            <li>
              <Link href="/login">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
