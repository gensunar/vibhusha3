import styles from "./AdminSideNavbar.module.css";
import Link from "next/link";

export default function AdminSideNavbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.admin_side_header}>Quick Menu</span>
        </div>
        <hr className={styles.hr} />
        <div className={styles.item}>
          <Link href="">
            <li className={styles.list}>Users</li>
          </Link>
          <Link href="">
            <li className={styles.list}>Products</li>
          </Link>
        </div>
      </div>
    </>
  );
}
