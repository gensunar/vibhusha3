import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link'
import styles from './Navbar.module.css'
import Head from 'next/head'

export default function Navbar() {
    return (
        <>
        <Head>
            <title>Home</title>
        </Head>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src= './images/logo.jpg' />
                    <p>VIBHASHU</p>
                </div>
                <div className={styles.menu}>
                    <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}