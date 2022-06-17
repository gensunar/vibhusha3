import styles from "./CartItem.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { local_url } from "../../../../constants/url";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { RiCouponLine } from "react-icons/ri";
import {
  decrease,
  increase,
  remove,
  totalPrice,
} from "../../../../Redux/Slices/cartSlice";

const CartItem = ({ id, image, price, title, cQuantity, actualPrice, category }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increase({ id }));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decrease({ id }));
  };
  const handleRemoveItem = () => {
    dispatch(remove(id));
  };

  return (
    <>
      <div className={styles.cart_item_container}>
        <div className={styles.data_container}>
          <div className={styles.image_container}>
            <Image
              className={styles.image}
              src={image}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.product_info}>
            <div className={styles.text_container}>
              <div className={styles.title_container}>
              <span className={styles.title}>{title}</span>
              <span className={styles.category}>{category}</span>
              </div>
              <div className={styles.qty_container}>
                <span className={styles.minus} onClick={handleDecreaseQuantity}>
                  <AiOutlineMinus />
                </span>
                <span className={styles.qty_counter}>{cQuantity}</span>
                <span className={styles.plus} onClick={handleIncreaseQuantity}>
                  <AiOutlinePlus />
                </span>
              </div>
              <div className={styles.bottom_row}>
                <div className={styles.price_container}>
                  <span className={styles.price}>Rs.{price}</span>
                  <span className={styles.actual_price}>Rs.{actualPrice}</span>
                </div>
                <div className={styles.amount_container}>
                  <span className={styles.total_amount}>
                    Rs.{price * cQuantity}
                  </span>
                  <span className={styles.discount_amount}>
                    Rs.{actualPrice * cQuantity}
                  </span>
                </div>
                <span className={styles.remove} onClick={handleRemoveItem}>
                  <MdClose />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
