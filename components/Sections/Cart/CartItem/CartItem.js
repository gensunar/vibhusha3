import styles from "./CartItem.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, remove } from "../../../../Redux/Slices/cartSlice";

const CartItem = ({id, image, price, title, cQuantity}) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  
  //const handleDecreaseQuantity = () => {
  //  quantity > 1 && setQuantity(quantity - 1);
  //};
  // const handleIncreaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };
  const handleIncreaseQuantity = () => {
    dispatch(increase({id}))
  }
  const handleDecreaseQuantity = () => {
    dispatch(decrease({id}))
  };
  const handleRemoveItem = () => {
    dispatch(remove())
  }

  return (
    <>
      <div className={styles.cart_item_container}>
        <div className={styles.left_wrapper}>
          <div className={styles.data_container}>
            <div className={styles.image_container}>
              <Image src={image} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.text_container}>
              <span className={styles.title}>{title}</span>
              <span className={styles.price}>Rs. {price}</span>
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
            <div className={styles.total}>
              <span className={styles.total_amount}>
                Rs. {price * cQuantity}
              </span>
              <span className={styles.remove} onClick={handleRemoveItem}>Remove</span>
            </div>
          </div>
          <hr className={styles.hr_line} />
        </div>
      </div>
    </>
  );
}

export default CartItem;