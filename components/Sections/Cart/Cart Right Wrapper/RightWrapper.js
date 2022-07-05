import styles from "./RightWrapper.module.css";
import Link from "next/link";
import { totalPrice, totalMrp } from "../../../../Redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const RightWrapper = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const shipping = cart.total < 20000 ? 99 : 0;

  useEffect(() => {
    dispatch(totalPrice());
    dispatch(totalMrp());
  }, [cart, dispatch]);

  return (
    <>
      <div className={styles.right_wrapper}>
        <div className={styles.right}>
          <span className={styles.summary}>Order Summary</span>
          <hr />
          <div className={styles.right_text_container}>
            <div className={styles.summary_text}>
              <span>Total MRP: </span>
              <span className={styles.summary_text_data}>
                Rs.{cart.totalMRP}
              </span>
            </div>
            <div className={styles.summary_text}>
              <span>Discount on MRP:</span>
              <span className={styles.discount_data}>
                {" "}
                Rs.{cart.totalMRP - cart.total}
              </span>
            </div>
            <div className={styles.summary_text}>
              <span>Shipping Charges:</span>
              {shipping !== 0 && (
                <span className={styles.summary_text_data}>Rs.{shipping}</span>
              )}
              {shipping === 0 && <span className={styles.free}>FREE</span>}
            </div>
            <div className={styles.summary_text}>
              <span>Tax:</span>
              <span className={styles.summary_text_data}>NA</span>
            </div>
          </div>
          <hr />
          <div className={styles.sub_total}>
            <span>Sub Total: {cart.products.length} item(s)</span>
            <span className={styles.total_price}>
              Rs.{cart.total + shipping}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightWrapper;
