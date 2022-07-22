import Head from "next/head";
import { useRouter } from "next/router"
import OrderDetail from "../../../../components/Sections/Users/Orders/OrderDetail/OrderDetail";
import Layout from "../../../../components/Utils/Layout/Layout";
//fetching all orders from DB
export async function getStaticPaths(props) {
  const router = useRouter 
    const res = await fetch(
      `https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Orders.json`
    );
    const data = await res.json();
    console.log(data);
  
    let orderId = [];
    for (const key in data) {
      orderId.push(key);
    }
    const paths = orderId.map((id) => {
      return {
        params: { order: id},
      };
    });
  
    return {
      paths: paths,
      fallback: 'blocking',
    };
  }
  
  //fetching product with respect to their ID
  export async function getStaticProps(context) {
    const id = context.params.order;
        const res = await fetch(
      `https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Orders/${id}.json`
    );
    const order = await res.json();
    return {
      props: {
        order: order,
      },
    };
  }

  export default function SingleOrder({order}) {
    return (
      <>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width,height=device-height,initial-scale=1.0"
            />
            <title>Vibhusha</title>
          </Head>
          <OrderDetail order={order} />
        </Layout>
      </>
    );
  }