import AdminSideNavbar from "../AdminNavbar/Admin Side Drawer/AdminSideNavbar"
import AdminLanding from "../Admin Functionality/AdminLandingPage/AdminLanding"
import styles from './AdminFront.module.css'

export default function AdminFront() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <AdminSideNavbar />
                </div>
                <div className={styles.center}>
                    <AdminLanding />
                </div>
            </div>
        </>
    )
}