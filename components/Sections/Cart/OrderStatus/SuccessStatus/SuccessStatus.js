import styles from "./SuccessStatus.module.css"
import { IoBagCheck } from "react-icons/io5";
import { useRouter } from "next/router"

const SuccessStatus = (props) => {
  const { query } = useRouter();
  console.log(query)
  return (
    <div className={styles.container}>
      <div className={styles.success_data}>
        <span className={styles.icon}> <IoBagCheck /></span>

        <span className={styles.order_text}>Your order {query.order_id} is successfully placed</span>
        <span className={styles.congrats}>Reference: {query.reference}</span>
        <span className={styles.congrats}>We hope to see you back</span>
        <span className={styles.order_page_link}>Go to order Page</span>
      </div>
    </div>
  )
}

export default SuccessStatus