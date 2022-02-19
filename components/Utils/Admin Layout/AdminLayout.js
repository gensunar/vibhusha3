import AdminNavbar from "../../Admin/AdminNavbar/AdminNavbar"
import AdminSideNavbar from "../../Admin/AdminNavbar/Admin Side Drawer/AdminSideNavbar"
export default function AdminLayout ({children}) {
    return(
        <>
            <AdminNavbar />
            <AdminSideNavbar />
            <main>
                {children}
            </main>
        </>
    )
}