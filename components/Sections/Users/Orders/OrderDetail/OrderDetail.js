import styles from "./OrderDetail.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { totalPrice, totalMrp } from "../../../../../Redux/Slices/cartSlice";

const OrderDetail = ({ order }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(order);

  useEffect(() => {
    dispatch(totalPrice());
    dispatch(totalMrp());
  }, [cart, dispatch]);
  return (
    <>
      <section className={styles.container}>
        <div className={styles.order_detail}>
          <span className={styles.account}>My Account</span>
          <div className={styles.order_id}>
            <span>Order Id: </span>
            <span className={styles.order_header}>#{order.orderId}</span>
            <span className={styles.order_status}>{order.order_status}</span>
          </div>
          {order.product.map((item) => (
            <div className={styles.order_data} key={item.productId}>
              <div className={styles.image_container}>
                <Image
                  className={styles.image}
                  src={item.productImage}
                  alt={item.productName}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className={styles.text}>
                <span className={styles.product_name}>{item.productName}</span>
                <div className={styles.usage}>
                  <span className={styles.usage_header}>Usage: </span>
                  <span className={styles.usage_data}>{item.usgae}</span>
                </div>
                <div className={styles.quantity}>
                  <span className={styles.quantity_header}>Qty: </span>
                  <span className={styles.quantity}>{item.cartQuantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section className={styles.right_section}>
          <div className={styles.right_data}>
            <div className={styles.shipping_data}>
              <span className={styles.shipping_header}>
                Shipping Information
              </span>
              <span className={styles.name}>{order.address.name}</span>
              <span className={styles.phone}>{order.address.phone}</span>
              <span className={styles.address}>
                {order.address.address}, {order.address.state},{" "}
                {order.address.district} - {order.address.pincode}
              </span>
            </div>
            <div className={styles.shipping_data}>
              <span className={styles.shipping_header}>Payment Details</span>
              <div className={styles.payment_header}>
                <span>Total Order Price: </span>
                <span className={styles.payment}>
                  {" "}
                  Rs. {order.payment.amount}
                </span>
              </div>
              <span className={styles.save_header}>
                You saved{" "}
                <span className={styles.save_amount}>
                  Rs.{cart.totalMRP - cart.total}
                </span>{" "}
                on this order.
              </span>
              <div className={styles.pay_status}>
                <span className={styles.pay_header}>Payment Status: </span>
                <span>
                  {order.isPaid === true ? (
                    <span className={styles.success_msg}>PAID</span>
                  ) : (
                    <span className={styles.fail_msg}>NOT PAID</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OrderDetail;
