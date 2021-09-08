import Head from 'next/head'
import ProductView from "../../components/Sections/Products/ProductView"
import Layout from '../../components/Utils/Layout/Layout'

export default function ProductPage() {
    return (
        <>
        <Layout>
            <Head>
                <title>Vibhusha</title>
            </Head>
            <ProductView />
        </Layout>
        </>
    )
}