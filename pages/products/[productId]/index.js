import Head from 'next/head';
import styles from './productId.module.css'
import IndividualProduct from '../../../components/Sections/ProductDetail/IndividualProduct'
import Layout from '../../../components/Utils/Layout/Layout'
import { baseurl } from '../../../constants/url';

//getting the id of eacgh product and displaying it from the IndividualProduct page
export async function getStaticPaths() {
    const res = await fetch(`https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Products.json`)
    const data = await res.json()
    console.log(data)

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

    const res = await fetch(`https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Products/${productId}.json`)
    const data = await res.json()

    return {
        props: {
            product: data
        }
    }
}
//getting the props to IndividualProduct page
export default function SingleProduct(props) {
    return (
        <>
        <Layout>
            <Head>
                <title>Vibhusha</title>
            </Head>
            <IndividualProduct product={props.product} />
        </Layout>
        </>
    )
}