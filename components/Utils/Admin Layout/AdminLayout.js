import AdminNavbar from "../../Admin/AdminNavbar/AdminNavbar"

export default function AdminLayout ({children}) {
    return(
        <>
            <AdminNavbar />
            <main>
                {children}
            </main>
        </>
    )
}