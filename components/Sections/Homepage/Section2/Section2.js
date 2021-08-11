import Link from 'next/link'
import styles from './Section2.module.css'

export default function Section2() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.link_container}>
                    <div className={styles.product_route}>
                        <Link href="/products">View all products</Link>
                    </div>
                    <div className={styles.join_route}>
                        <Link href='/login'>Join us</Link>
                    </div>
                </div>
            </div>
        </>
    )
}