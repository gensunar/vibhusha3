import { useEffect, useState } from "react";
import ProductItem from "../Products/ProductItem/ProductItem";
import styles from "./ProductView.module.css";
import Loading from "../../Utils/UI/Loading/Loading";

//fetching all data from firebase
export default function ProductView() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(
      `https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Products.json`
    );
    const data = await res.json();
    console.log(data);

    let allProduct = [];
    for (const productId in data) {
      const ProductData = data[productId];
      allProduct.push(ProductData);

      // console.log(allProduct)
    }
    setProducts(allProduct);
    setIsLoading(false);
  };
  console.log(products);
  useEffect(() => {
    fetchData();
  }, []);

  //passing the props to ProductItem page
  return (
    <>
      <div className={styles.card_container}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {/* <div className={styles.product_container}> */}
            {products.map((product) => (
              <ProductItem
                key={product.productId}
                price={product.price}
                image={product.productImage}
                title={product.productName}
                id={product.productId}
                description={product.productDescription}
              />
            ))}
          </>
        )}
        {/* </div> */}
      </div>
    </>
  );
}
