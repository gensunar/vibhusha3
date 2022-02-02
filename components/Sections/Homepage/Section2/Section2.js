import Link from 'next/link'
import styles from './Section2.module.css'

export default function Section2() {
    return (
        <>
        <div className={styles.main_container}>
            <div className={styles.container}>
                <div className={styles.product_link}>
                    <span>View Products</span>
                </div>
                <div className={styles.join_link}>
                    <span>Join Us</span>
                </div>
            </div>
            </div>
        </>
    )
}