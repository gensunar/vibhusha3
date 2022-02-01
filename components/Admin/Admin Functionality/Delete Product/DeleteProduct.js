import ProductMap from '../ProductMapping/ProductMapping'
import styles from './DeleteProduct.module.css'

export default function DeleteProduct(props) {
    return (
        <>
                <ProductMap />
            <h2>Deleting Product</h2>
            <div className={styles.main_container}>
                <h2 onClick={fetchData}>View all Product</h2>
                <div className={styles.content}>
                    {product.map((item) => {

                        return (
                            <>
                            <div className={styles.product_container} key={item.productId}>
                                <div className={styles.text_container}>

                                    <h1>{item.productId}</h1>
                                    <h1>{item.productName}</h1>
                                    <h2>{item.price}</h2>
                                    <p>{item.productImage}</p>
                                    <h2>{item.productDescription}</h2>
                                </div>
                                <button className={styles.delete}>Delete</button>
                            </div>
                           </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
