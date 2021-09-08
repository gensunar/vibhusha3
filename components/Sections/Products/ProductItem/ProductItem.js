import styles from './ProductItem.module.css'
import Link from 'next/link'
import router, {useRouter} from 'next/router'


export default function ProductItem(props) {
    const productRoute = () => {
        router.push(`/products/${props.id}`)
    }   
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
                <button className={styles.view_button} onClick= {productRoute}>View</button>
            </div>
        </>
    )
}
