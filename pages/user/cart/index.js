import Layout from "../../../components/Utils/Layout/Layout";
import Cart from "../../../components/Sections/Cart/Cart";
import { useEffect } from "react";
import Login from "../../../components/Sections/Users/Login/Login"

const cart = () => {
const currentUser = true
if(!currentUser){
  return <Login />
}
  return (
    <>
      <Layout>
        <Cart />
      </Layout>
    </>
  );
};

export default cart;
