import styles from './AdminSideNavbar.module.css'
import Link from 'next/link'
export default function AdminSideNavbar(){
    return(
        <>
        <div className={styles.container}>
            <p>SideNavbar</p>
            <div className={styles.title}>
                <h3>Quick Menu</h3>
            </div>
            <div className={styles.item}>
            <li className={styles.list}>Users</li>
            <li className={styles.list}>Products</li>
            </div>
        </div>
        </>
    )
}