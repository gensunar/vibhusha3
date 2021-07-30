import styles from './ProductItem.module.css'
import Link from 'next/link'

export default function ProductItem(props) {
    return (
        <>
            <h3>Getting product</h3>
            <div className={styles.main_card}>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={styles.text_container}>
                        <span className={styles.title}>{props.title}</span>
                        <span className={styles.price}>Rs.{props.price}{props.id}</span>
                        <span className={styles.description}>This is a product lklkkhfsadfffggghjgkkkhjkjjkffffffgfgffg</span>
                    </div>
                    <div className={styles.actions}>
                        <Link href={"/products/[productId]"} as={`/products/${props.id}`}><button className={styles.view}>View</button></Link>
                        <button className={styles.buy}>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}