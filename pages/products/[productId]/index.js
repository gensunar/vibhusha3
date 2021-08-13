import Head from 'next/head';
import styles from './productId.module.css'
import ProductSlider from '../../../components/Sections/ProductDetail/ProductSlider'
import Layout from '../../../components/Utils/Layout/Layout'
import { baseurl } from '../../../constants/url';

export async function getStaticPaths() {
    const res = await fetch(`${baseurl}/products/get-products`)
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

    const res = await fetch(`${baseurl}/products/get-product-by-id/${productId}`)
    const data = await res.json()

    return {
        props: {
            product: data
        }
    }
}
export default function SingleProduct(props) {
    return (
        <>
        <Layout>
            <Head>
                <title>Vibhusha</title>
            </Head>
            <ProductSlider product={props.product} />
        </Layout>
        </>
    )
}