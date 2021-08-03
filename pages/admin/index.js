import AddProduct from "../../components/Admin/Admin Functionality/AddProduct"
import AdminLayout from '../../components/Utils/Admin Layout/AdminLayout'

export default function Admin () {
    return(
        <>
            <AdminLayout />
            <h1>This is admin page</h1>
            <AddProduct />
        </>
    )
}