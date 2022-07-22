import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Order.module.css";
import Image from "next/image";
import { local_url } from "../../../../constants/url";
import Link from "next/link";
import Loading from "../../../Utils/UI/Loading/Loading";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state) => state.user.user);
  const fetchOrder = async () => {
    try {
      const formData = new FormData();
      formData.append("id", user.uid);
      const res = await fetch(`http://localhost:5000/order/get-orders`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      let order = [];
      for (const i in data) {
        const ordData = data[i];
        order.push(ordData);
      }
      setOrderData(order);
      setIsLoading(false);
      console.log(orderData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);
  // const book = orderData.map((item, index) => item.product.map((product) => product.id))
  console.log(orderData);
  // console.log(book);

  return (
    <>
      <div className={styles.order_container}>
        {isLoading && <Loading />}
        {/* {!isLoading && ( */}
          <div className={styles.order_container}>
            <h3 className={styles.header}>My Orders</h3>
            {orderData.map((item, index) => (
              <>
                <h3 key={index}>{item.orderId}</h3>
                {item.product.map((product, index) => (
                  <Link href={`/user/my-orders/${item.orderId}`}>
                    <div
                      className={styles.order_data}
                      key={index + Math.random(Date.now())}
                    >
                      <div className={styles.image_container}>
                        <Image
                          className={styles.image}
                          src={product.productImage}
                          alt={product.productName}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <span>{product.productName}</span>
                      <span></span>
                    </div>
                  </Link>
                ))}
              </>
            ))}
          </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Orders;
