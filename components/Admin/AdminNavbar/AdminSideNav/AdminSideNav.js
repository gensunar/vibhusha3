import styles from "./AdminSideNav.module.css";
import Link from 'next/link'
import { AiOutlineHome, AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const AdminSideNav = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.content}>
          <span className={styles.dashboard}>Dashboard</span>
          <div className={styles.quick_container}>
            <span className={styles.menu}><AiOutlineHome className={styles.icon}/>Home</span>
            <span className={styles.menu}><AiOutlineUser className={styles.icon} />Users</span>
            <Link href='/admin/product' passHref><span className={styles.menu}><AiOutlineShoppingCart className={styles.icon}/>Product</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSideNav;
