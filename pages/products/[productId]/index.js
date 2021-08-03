import Head from 'next/head';
import styles from './productId.module.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductSlider from '../../../components/Sections/ProductDetail/ProductSlider'
import Layout from '../../../components/Utils/Layout/Layout'

const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

export async function getStaticPaths() {
    const res = await fetch("http://localhost:5000/products/get-products")
    const data = await res.json()
    // console.log(data)

    let ProductId = []
    for (const key in data)
        ProductId.push(key)


    const paths = ProductId.map((id) => {
        return {
            params: { productId: id }
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const productId = context.params.productId

    const res = await fetch(`http://localhost:5000/products/get-product-by-id/${productId}`)
    const data = await res.json()

    // let SingleProduct = []
    // for (const productId in data){
    //     const productData = data[productId]
    //     SingleProduct.push(productData)
    //}
    return {
        props: {
            product: data
        }
    }
}
export default function SingleProduct(props) {
    const imgArr = props.product.productImage
    return (
        <>
        <Layout>
            <Head>
                <title>Vibhusha</title>
            </Head>
            <h1>Single itempage</h1>
            <Slider {...settings}>
                {imgArr.map((img, index) => (
                    <ProductSlider 
                    key = {index}
                    url = {img}
                    />
                ))}
            </Slider>
            <div className={styles.main_card}>
                <div className={styles.card}>
                    <p>{props.product.productName}</p>
                    <p>{props.product.price}</p>
                    <p>{props.product.productDescription}</p> 
                </div>
            </div>
        </Layout>
        </>
    )
}