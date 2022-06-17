import { useSelector } from "react-redux";
import styles from "./ReviewOrder.module.css";
import Image from "next/image";
import RightWrapper from "../Cart Right Wrapper/RightWrapper";

const ReviewOrder = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.products);
  return (
    <>
      <div className={styles.review_order_container}>
        <div className={styles.data_container}>
          <header>
            <span className={styles.review_header}>Review your order</span>
          </header>
          <div className={styles.info_container}>
            <div className={styles.address_container}>
              <span className={styles.deliver}>Deliver to:</span>
              <span className={styles.title}>Rahul Sunar</span>
              <span className={styles.address}>
                Lower Haflong Railway Colony
              </span>
              <span className={styles.town}>Village</span>
              <span className={styles.locality}>District, State- Pin7888</span>
              <span className={styles.phone}>1234567890</span>
            </div>
            <div className={styles.product_container}>
              <div className={styles.cart_items_header}>
                <span className={styles}>Your cart items</span>
              </div>
              {cart.products.map((item) => (
                <div className={styles.product_item}>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.image}
                      src={item.productImage}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className={styles.text_container}>
                    <div className={styles.title_container}>
                      <span className={styles.product_name}>
                        {item.productName}
                      </span>
                      <span className={styles.category}>{item.category}</span>
                    </div>
                    <div className={styles.bottom}>
                      <div className={styles.product_quantity}>
                        <span className={styles.product_info_header}>Qty:</span>
                        <span className={styles.cartQuantity}>
                          {item.cartQuantity}
                        </span>
                      </div>
                      <div className={styles.price_column}>
                        <span className={styles.price}>Rs.{item.price}</span>
                        <span className={styles.actual_price}>
                          Rs.{item.actualPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.right_wrapper}>
          <RightWrapper />
        </div>
      </div>
    </>
  );
};

export default ReviewOrder;
