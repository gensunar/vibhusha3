import styles from "./IndividualProduct.module.css";
import Image from "next/image";
import { useState } from "react";

//importing the props from dynamic [productId] as product
export default function IndividualProduct(product) {
  console.log(product);
  //console.log(product.product.productImage);

  const [isLoading, setIsLoading] = useState(true)
  const value = 5666-product.product.price
  const discount = Math.round(value/5666*100)

  return (
    <>
      <div className={styles.main_container}>
        {}
        <div className={styles.wrapper_container}>
          <div className={styles.image_container}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${product.product.productImage})`
              }}
            >
              {/* <Image src={product.product.productImage} layout="fill" /> */}
            </div>
          </div>
          <div className={styles.product_text_container}>
            <span className={styles.product_name}>
              {product.product.productName}
            </span>
            <div className={styles.price}>
            <span className={styles.discount_price}>&#x20B9; 5666</span>
            <span className={styles.product_price}>
              &#8377; {product.product.price}
            </span>
            <span className={styles.discount}>({discount}% off)</span>
            </div>
            <span className={styles.taxes}>inclusive of all taxes</span>
            <div className={styles.description_header}>
              <span className={styles.product_about_header}>About this item:</span>
              <span className={styles.product_description}>
                {product.product.productDescription}
              </span>
            </div>
          </div>
          <div className={styles.button}>
              <button className={styles.cart}>ADD TO BAG</button>
              <button className={styles.buy}>BUY NOW</button>
            </div>
        </div>
      </div>
    </>
  );
}
