import Link from 'next/link'

export default function AdminNavbar() {
    return(
        <>
            <nav className="">
                <div className="">
                    <img src= "" />
                    <p>VIBHASHU</p>
                </div>
                <div className="">
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