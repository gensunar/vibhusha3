import styles from "./Cart.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  console.log("cart", cart.products);

  // const handleQuantity = (type) => {
  //   if (type === "decrease") {
  //     quantity > 1  && setQuantity(quantity - 1);
  //   } else {
  //     setQuantity(quantity + 1);
  //   }
  //   console.log(type);
  // };

  return (
    <>
      <div className={styles.cart_container}>
        {cart.products.length == 0 ? (
          <div className={styles.empty_cart}>
            <div className={styles.empty_cart_header}>
              <span className={styles.bag}>
                My Shopping Cart({cart.products.length})
              </span>
              <span className={styles.empty_cart_title}>Your Cart is Empty</span>
              <div className={styles.shopping}>
              <button>Continue Shopping</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.cart_items}>
              <span className={styles.bag}>
                My Shopping Cart({cart.products.length})
              </span>
              <div className={styles.header}>
                <span className={styles.cart_title}>ITEMS ADDED:</span>
                <button className={styles.remove_button}>Remove All</button>
              </div>
              <hr className={styles.hr_line} />
              {cart.products.map((item) => (
                <CartItem
                  key={item.productId}
                  title={item.productName}
                  price={item.price}
                  image={item.productImage}
                  id={item.productId}
                  cQuantity={item.cartQuantity}
                />
              ))}
            </div>
            <div className={styles.right_wrapper}>
              <div className={styles.right}>
                <span className={styles.summary}>Order Summary</span>
                <hr />
                <div className={styles.right_text_container}>
                  <div className={styles.summary_text}>
                    <span>Total MRP: </span>
                    <span className={styles.summary_text_data}>Rs. 8799 </span>
                  </div>
                  <div className={styles.summary_text}>
                    <span>Discount on MRP:</span>
                    <span className={styles.summary_text_data}> Rs. 799</span>
                  </div>
                  <div className={styles.summary_text}>
                    <span>Shipping Charges:</span>
                    <span className={styles.summary_text_data}>
                      Rs. 99 | Free
                    </span>
                  </div>
                  <div className={styles.summary_text}>
                    <span>Tax:</span>
                    <span className={styles.summary_text_data}>NA</span>
                  </div>
                </div>
                <hr />
                <div className={styles.sub_total}>
                  <span>Sub Total:(2 items)</span>
                  <span className={styles.total_price}>Rs. 10345</span>
                </div>
                <button className={styles.place_order}>PLACE ORDER</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;

// {cart.products.map((item) => (
//   <CartItem
//     key={item.productId}

//   />
// ))}
