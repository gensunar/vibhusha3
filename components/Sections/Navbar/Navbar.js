import { FaInstagramSquare, FaFacebookSquare } from 'react-icons/fa';
import Link from 'next/link'
import styles from './Navbar.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Navbar(props) {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Link href="/">
                        <a>
                            <Image className={styles.image}
                                src= "/images/logo.jpg"
                                alt="logo"
                                width='60'
                                height='60'
                            />
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
    )
}