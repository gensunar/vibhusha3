import styles from "./CartItem.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md"
import { RiCouponLine } from "react-icons/ri";
import {
  decrease,
  increase,
  remove,
  totalPrice,
} from "../../../../Redux/Slices/cartSlice";

const CartItem = ({ id, image, price, title, cQuantity }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //const handleDecreaseQuantity = () => {
  //  quantity > 1 && setQuantity(quantity - 1);
  //};
  // const handleIncreaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  const handleIncreaseQuantity = () => {
    dispatch(increase({ id }));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decrease({ id }));
  };
  const handleRemoveItem = () => {
    dispatch(remove(id));
  };
  useEffect(() => {
    dispatch(totalPrice());
  }, [cart]);

  return (
    <>
      <div className={styles.cart_item_container}>
        <div className={styles.left_wrapper}>
          <div className={styles.data_container}>
            <div className={styles.image_container}>
              <Image className={styles.image} src={image} layout="fill" />
            </div>
            <div className={styles.info_container}>
              <div className={styles.text_container}>
                <span className={styles.title}>{title}</span>
                <span className={styles.remove} onClick={handleRemoveItem}>
                  <MdClose />
                </span>
              </div>
              <div className={styles.bottom_row}>
                <div className={styles.qty_container}>
                  <span className={styles.minus} onClick={handleDecreaseQuantity}>
                    <AiOutlineMinus />
                  </span>
                  <span className={styles.qty_counter}>{cQuantity}</span>
                  <span className={styles.plus} onClick={handleIncreaseQuantity}>
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className={styles.total}>
                  <span className={styles.price}>Rs. {price}</span>
                  <span className={styles.total_amount}>
                    Rs. {price * cQuantity}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className={styles.savings}><span className={styles.savings_icon}><RiCouponLine /></span>
          <span className={styles.savings_data}> Total savings:Rs. 1234</span></div> */}
          <hr className={styles.hr_line} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
