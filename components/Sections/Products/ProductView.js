import {useEffect, useState} from 'react'
import ProductItem from "../Products/ProductItem/ProductItem"
import styles from './ProductView.module.css' 
import {baseurl} from '../../../constants/url'

export default function ProductView(){
    const [products, setProducts] = useState([])
    
    const fetchData = async () => {
        const res = await fetch(`${baseurl}/products/get-products`,
        {
            method: "GET",
            headers: {
                Accept: "application/json"
            },

        })
        const data = await res.json()
        console.log(data)

        let allProduct = []
        for (const productId in data){
            const ProductData = data[productId]
            allProduct.push(ProductData)
           
            // console.log(allProduct)
        }
        setProducts(allProduct)
    }
    //console.log(products)
    useEffect(() => {
        fetchData()
    }, [])
return(
    <>
    <div className={styles.product_container}>
    {products.map((product)=> (
        <ProductItem 
            key = {product.productId}
            price = {product.price}
            image = {product.productImage[0]}
            title = {product.productName}
            id = {product.productId}
            description = {product.productDescription}
        />
    ))}
    </div>
    </>
)
}