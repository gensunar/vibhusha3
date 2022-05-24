import styles from "./IndividualProduct.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, products } from "../../../Redux/Slices/cartSlice";

//importing the props from dynamic [productId] as product
export default function IndividualProduct({ product }) {
  const dispatch = useDispatch();
  const [test, setTest] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const value = 5666 - product.price;
  const discount = Math.round((value / 5666) * 100);
  const products = useSelector((state) => state.cart.products);

  const cart = useSelector((state) => state.cart);
  console.log(product);
  const isInCart = (product) => {
    return !!products.find((item) => item.productId === product.productId);
  };

  const cartHandler = () => {
    dispatch(
      addProduct({
        ...product,
      })
    );
    console.log(addProduct);
  };

  return (
    <>
      <div className={styles.main_container}>
        {}
        <div className={styles.wrapper_container}>
          <div className={styles.image_container}>
            {/* <Image className={styles.image}
              src= {product.product.productImage}
              layout="fill"
            /> */}
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${product.productImage})`,
              }}
            ></div>
          </div>
          <div className={styles.info_container}>
            <h1 className={styles.product_title}>{product.productName}</h1>
            <div className={styles.description_header}>
              <span className={styles.product_about_header}>
                About this item:
              </span>
              <span className={styles.product_description}>
                {product.productDescription}
              </span>
            </div>
            <div className={styles.price}>
              <span className={styles.discount_price}>Rs. 5666</span>
              <span className={styles.product_price}>Rs. {product.price}</span>
              <span className={styles.discount}>({discount}% off)</span>
            </div>
            {/* <div className={styles.qty_container}>
              <span className={styles.plus}>
                <AiOutlinePlus />
              </span>
              <span className={styles.qty_counter}>2</span>
              <span className={styles.minus}>
                <AiOutlineMinus />
              </span>
            </div> */}
            <div className={styles.button}>
              {isInCart(product) && (
                <button className={styles.cart} onClick={cartHandler}>
                  ADD MORE
                </button>
              )}
              {!isInCart(product) && (
                <button className={styles.cart} onClick={cartHandler}>
                  ADD TO BAG
                </button>
              )}
              <button className={styles.buy}>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div
              className={styles.image}
              style={{
                backgroundImage: `url(${product.product.productImage})`,
              }}
            >
              {/* <Image src={product.product.productImage} layout="fill" /> */
}
// </div>
