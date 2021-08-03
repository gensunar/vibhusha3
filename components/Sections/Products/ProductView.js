import {useEffect, useState} from 'react'
import ProductItem from "./ProductItem"

export default function ProductView(){
    const [products, setProducts] = useState([])
    
    const fetchData = async () => {
        const res = await fetch("http://localhost:5000/products/get-products")
        const data = await res.json()
        

        let allProduct = []
        for (const productId in data){
            const ProductData = data[productId]
            allProduct.push(ProductData)
           
            // console.log(allProduct)
        }
        setProducts(allProduct)
    }
    console.log(products)
    useEffect(() => {
        fetchData()
    }, [])
return(
    <>
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
    </>
)
}