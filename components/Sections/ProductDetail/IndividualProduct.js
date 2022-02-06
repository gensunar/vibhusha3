import styles from "./IndividualProduct.module.css";
import Image from "next/image";

//importing the props from dynamic [productId] as product
export default function ProductSlider(product) {
  console.log(product);
  //console.log(product.product.productImage);
  return (
    <>
      <div className={styles.main_container}>
        <span>{product.product.productName}</span>
        <div className={styles.wrapper_container}>
          <div className={styles.image_container}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${product.product.productImage})`,
              }}
            >
              {/* <Image src={product.product.productImage} layout="fill" /> */}
            </div>
          </div>
          <div className={styles.product_text_container}>
            <span className={styles.product_name}>
              {product.product.productName}
            </span>
            <span className={styles.product_price}>
              Rs.{product.product.price}
            </span>
            <div className={styles.desccription_header}>
              <span>About this item:</span>
              <span className={styles.product_description}>
                {product.product.productDescription}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
