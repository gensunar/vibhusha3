import styles from "./ProductItem.module.css";
import Link from "next/link";
import router, { useRouter } from "next/router";

export default function ProductItem(props) {
  
  const productRoute = () => {
     router.push(`/products/${props.id}`);
  };

  //Calculating the discount value
  const value = 5666-props.price
  const discount = Math.round(value/5666*100)

  return (
    <>
      <div className={styles.card} onClick={productRoute}>
        <div
          className={styles.image_container}
          style={{ backgroundImage: `url(${props.image})` }}
        >
          {/* <Image className={styles.image} src={props.image} alt={props.title} layout="fill" /> */}
        </div>
        <div className={styles.text_container}>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.description}>{props.description}</span>
          <div className={styles.price}>
            <span className={styles.show_price}>&#x20B9;{props.price}</span>
            <span className={styles.discount_price}>&#x20B9;5666</span>
            <span className={styles.discount}>({discount}% off)</span>
          </div>
        </div>
      </div>
    </>
  );
}
