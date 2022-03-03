import AdminNavbar from "../../Admin/AdminNavbar/AdminNavbar";
import AdminSideNav from '../../Admin/AdminNavbar/AdminSideNav/AdminSideNav'
import Footer from "../../Sections/Footer/Footer";
import styles from './AdminLayout.module.css'

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <AdminSideNav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
