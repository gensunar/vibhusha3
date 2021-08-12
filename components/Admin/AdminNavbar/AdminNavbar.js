import Link from 'next/link'
import styles from './AdminNavbar.module.css'
import Image from 'next/image'
import logo from '../../../public/images/logo.jpg'

export default function AdminNavbar() {
    return(
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src={logo} className={styles.logo_image}
                    alt = "Vibhusha"
                      width= {'60px'}
                      height ={'60px'}
                    />
                    <p>VIBHASHU</p>
                </div>
                <div className={styles.menu_items}>
                    <ul>
                    <li>
                        <Link href="/">Add Product</Link>
                    </li>
                    <li>
                        <Link href="/admin/deleteProduct">Delete Product</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}