import Link from "next/link"

export default function ProductRoute(){
    return(
        <>
        <Link href="/products">
            <a>View All Products</a>
        </Link>
        </>
    )
}