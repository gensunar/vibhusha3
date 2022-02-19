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
          <Link href="/" passHref>
            <span className={styles.list}>Users</span>
          </Link>
          <span className={styles.list}>Products</span>
          <span className={styles.product_list}><Link href="/admin/view" passHref>View Product</Link></span>
          <span className={styles.product_list}><Link href="/admin/add" passHref>Add Product</Link></span>
        </div>
      </div>
    </>
  );
}
