import styles from './ProductSlider.module.css'
import Image from 'next/image'

export default function ProductSlider(product) {
    console.log(product)
    return (
        <>
            <div className={styles.main_container}>
                 <div className={styles.image_container}>
                                    <Image 
                                    src={product.productImage} 
                                    layout="fill"
                                    />
                </div> 
                <div className={styles.text_container}>
                    <p>{product.product.productName}</p>
                    <p>{product.product.price}</p>
                    <p>{product.product.productDescription}</p>
                </div>
            </div>
        </>
    )
}