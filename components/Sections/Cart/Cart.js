import styles from "./Cart.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useSelector } from "react-redux";
import CartItem from "./CartItem/CartItem";
import RightWrapper from "./Cart Right Wrapper/RightWrapper";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartState, setCartState] = useState({});

  if (cart.products.length < 1) {
    return (
      <div className={styles.cart_container}>
        <div className={styles.empty_cart_header}>
          <span className={styles.bag}>
            My Shopping Cart({cart.products.length})
          </span>
          <span className={styles.empty_cart_title}>Your Cart is Empty</span>
          <div className={styles.shopping}>
            <button className={styles.shopping_button}>
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <section className={styles.cart_items}>
        <div className={styles.cart_header}>
          <header className={styles.header}>
            <span className={styles.shopping_cart}>
              My Shopping Cart({cart.products.length})
            </span>
            <div className={styles.cart_button}>
              <button>continue shopping</button>
              <button>Empty Cart</button>
            </div>
          </header>
          {/* <hr className={styles.hr_line} /> */}
          {cart.products.map((item) => (
            <CartItem
              key={item.productId}
              title={item.productName}
              price={item.price}
              image={item.productImage}
              id={item.productId}
              cQuantity={item.cartQuantity}
              actualPrice={item.actualPrice}
              category={item.category}
            />
          ))}
          {/* <hr className={styles.hr_line} /> */}
        </div>
        <div className={styles.right_wrapper}>
          <RightWrapper />
        </div>
      </section>
    </>
  );
};

export default Cart;