import styles from './ProductItem.module.css'
import Link from 'next/link'

export default function ProductItem(props) {
    return (
        <>
            <div className={styles.main_card}>
                <div className={styles.card}>
                    <div className={styles.property}>
                        <img src={props.image} alt={props.title} />
                        <span className={styles.title}>{props.title}</span>
                        <span className={styles.price}>{props.price}</span>
                        <span className={styles.description}></span>
                        <Link href={"/products/[productId]"} as={`/products/${props.id}`}><button className={styles.view}>View</button></Link>
                        <button className={styles.buy}>Buy Now</button> 
                    </div>
                </div>
            </div>
        </>
    )
}