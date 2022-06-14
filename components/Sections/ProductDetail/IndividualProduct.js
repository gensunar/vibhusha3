import styles from "./IndividualProduct.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AiOutlineDelete,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { local_url } from '../../../constants/url'
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../Redux/Slices/cartSlice";

//importing the props from dynamic [productId] as product
export default function IndividualProduct({ product }) {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [test, setTest] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const value = 5666 - product.price;
  const discount = Math.round((value / 5666) * 100);
  const products = useSelector((state) => state.cart.products);

  const cart = useSelector((state) => state.cart);
  // console.log(product);
  const isInCart = (product) => {
    return !!products.find((item) => item.productId === product.productId);
  };
  useEffect(() => {
    setTest(products)
    console.log("HEllo product effecrt changed")
  }, [cart])

  const cartHandler = (product) => {
    dispatch(
      addProduct({  
        ...product,
      }),
    );
    console.log("prooo",addProduct);
    console.log("first", cart)
  };
  // const cartDbHandler = async() => {
  //   var formData = new FormData()
  //   formData.append('products', JSON.stringify(test))
  //   const response = await fetch(`${local_url}/cart/save-cart`, {
  //     method: "POST",
  //     mode: 'cors',
  //     body: formData,
  //   });
  // }
  // console.log("ihssi",cartDbHandler)
  
  return (
    <>
      <div className={styles.main_container}>
        {}
        <div className={styles.wrapper_container}>
          <div className={styles.image_container}>
            <Image
              className={styles.image}
              src={product.productImage}
              alt={product.productName}
              layout="fill"
              priority="true"
            />
          </div>
          <div className={styles.info_container}>
            <div className={styles.product_title_header}>
              <h1 className={styles.product_title}>{product.productName}</h1>
            </div>
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
                <Link href="/user/cart">
                  <button className={styles.bag_button}>
                    GO TO BAG <AiOutlineArrowRight />
                  </button>
                </Link>
              )}
              {!isInCart(product) && (
                <button className={styles.cart} onClick={()=>cartHandler(product)}>
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