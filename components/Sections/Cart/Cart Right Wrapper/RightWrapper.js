import styles from './RightWrapper.module.css'
import Link from "next/link"
const RightWrapper = () => {
  return (
    <>
      <div className={styles.right_wrapper}>
        <div className={styles.right}>
          <span className={styles.summary}>Order Summary</span>
          <hr />
          <div className={styles.right_text_container}>
            <div className={styles.summary_text}>
              <span>Total MRP: </span>
              <span className={styles.summary_text_data}>Rs. </span>
            </div>
            <div className={styles.summary_text}>
              <span>Discount on MRP:</span>
              <span className={styles.summary_text_data}> Rs. 799</span>
            </div>
            <div className={styles.summary_text}>
              <span>Shipping Charges:</span>
              <span className={styles.summary_text_data}>Rs. 99 | Free</span>
            </div>
            <div className={styles.summary_text}>
              <span>Tax:</span>
              <span className={styles.summary_text_data}>NA</span>
            </div>
          </div>
          <hr />
          <div className={styles.sub_total}>
            <span>Sub Total:(2 items)</span>
            <span className={styles.total_price}>Rs.</span>
          </div>
          <Link href="/user/cart/address" passHref>
            <button className={styles.place_order}>PLACE ORDER</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RightWrapper;
