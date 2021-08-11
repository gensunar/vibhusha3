import styles from './ProductItem.module.css'
import Link from 'next/link'


export default function ProductItem(props) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.image_container} 
                    style= {{ backgroundImage: `url(${props.image})` }}
                >
                    {/* <Image className={styles.image} src={props.image} alt={props.title} layout="fill" /> */}
                </div>
                <div className={styles.text_container}>
                    <div className={styles.title}>{props.title}</div>
                    <div className={styles.text}>
                        Rs. {props.price}
                    </div>
                </div>
                <Link href={"/products/[productId]"} as={`/products/${props.id}`}><button className={styles.view_button}>View</button></Link>
            </div>
        </>
    )
}
//style= {{backgroundImage: `url(${props.image})`}}