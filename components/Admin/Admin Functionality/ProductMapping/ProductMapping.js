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
            <h2>Deleting Product</h2>
            <div className={styles.main_container}>
                <h2 onClick={fetchData}>View all Product</h2>
                <div className={styles.content}>
                    {product.map((item) => {
                        return (
                            <div className={styles.product_container} key={item.productId}>
                                <div className={styles.text_container}>
                                    <h1>{item.productId}</h1>
                                    <h1>{item.productName}</h1>
                                    <h2>{item.price}</h2>
                                    <p>{item.productImage}</p>
                                    <h2>{item.productDescription}</h2>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

