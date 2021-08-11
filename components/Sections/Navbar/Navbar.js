import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link'
import styles from './Navbar.module.css'
import Head from 'next/head'
import Image from 'next/image'
import logo from '../../../public/images/logo.jpg'

export default function Navbar(props) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image className={styles.image}
                        src={logo}
                        width= {'60px'}
                        height ={'60px'}
                    />
                    <p>VIBHASHU</p>
                </div>
                <div className={styles.menu}>
                    <ul>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li className={styles.login}>
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}