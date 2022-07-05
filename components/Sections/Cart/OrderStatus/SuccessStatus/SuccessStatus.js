import styles from "./SuccessStatus.module.css"
import { IoBagCheck } from "react-icons/io5";

const SuccessStatus = () => {
  return (
    <div className={styles.container}>
      <div className={styles.success_data}>
        <span className={styles.icon}> <IoBagCheck /></span>
        <span className={styles.order_text}>Your order order_125367784378275347834 is successfully placed</span>
        <span className={styles.congrats}>Thank you for shopping with us</span>
        <span className={styles.congrats}>We hope to see you back</span>
        <span className={styles.order_page_link}>Go to order Page</span>
      </div>
    </div>
  )
}

export default SuccessStatus