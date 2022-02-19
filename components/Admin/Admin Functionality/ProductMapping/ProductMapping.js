import { useEffect, useState } from "react"
import styles from './ProductMapping.module.css'
import Button from '../../../../components/Utils/UI/Button/Button'


export default function ProductMapping(props) {
    const [product, setProduct] = useState([])

    const fetchData = async () => {
        const res = await fetch(`https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Products.json`)
        const data = await res.json()

        let allProduct = []
        for (const productId in data) {
            const ProductData = data[productId]
            allProduct.push(ProductData)
        }
        setProduct(allProduct)
    }
    console.log(product)
    return (
        <>
            <div className={styles.main_container}>
                <span className={styles.view_product} onClick={fetchData}>View all Product</span>
                <div className={styles.content}>
                    {product.map((item) => {
                        return (
                            <div className={styles.product_container} key={item.productId}>
                                <div className={styles.text_container}>
                                    <div className={styles.product_data}><span className={styles.product_key} >Product ID:</span> {item.productId}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Name:</span> {item.productName}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Price:</span> {item.price}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>ProductURL:</span> {item.productImage}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Desc:</span> {item.productDescription}</div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

