import styles from "./ReviewOrder.module.css";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { local_url, base_url } from "../../../../constants/url";
import Cart from "../Cart";
import { totalPrice, totalMrp } from "../../../../Redux/Slices/cartSlice";
import CheckoutAddress from "../CheckOutAddress/CheckoutAddress";
import RightWrapper from "../Cart Right Wrapper/RightWrapper";

const ReviewOrder = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const shipping = cart.total < 20000 ? 99 : 0;

  const addState = useSelector((state) => state.address.address);

  const [isError, setIsError] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const amount = cart.total + shipping;
  useEffect(() => {
    dispatch(totalPrice());
    dispatch(totalMrp());
  }, [cart, dispatch]);

  if (cart.products.length < 1) {
    return <Cart />;
  }
  if(addState==null){
    return <CheckoutAddress />
  }
  const loadRazorpayHandler = async () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => {
      alert("Razorpay SDK failed to load");
    };
    script.onload = async () => {
      try {
        const formData = new FormData();
        formData.append("amount", amount);
        const response = await fetch(
          `${base_url}/order/create-order`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        console.log(data);
        const keyData = await fetch(
          `${base_url}/order/get-razorpay-key`
        );
        const key = await keyData.json();
        const options = {
          key: key.key,
          amount: data.amount.toString(),
          currency: data.currency,
          name: "VIBHUSHA",
          description: "Transaction",
          order_id: data.id,

          handler: async function (response) {
            const formData = new FormData();
            formData.append("amount", amount);
            formData.append("razorpayPaymentId", response.razorpay_payment_id);
            formData.append("razorpayOrderId", response.razorpay_order_id);
            formData.append("razorpaySignature", response.razorpay_signature);
            const result = await fetch(`${base_url}/order/pay-order`, {
              method: "POST",
              body: formData,
            });
            const paymentData = await result.json();
            console.log(paymentData);
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            router.push("/user/cart/success")
          },
          prefill: {
            name: "Rahul Sunar",
            email: "rahul@gmail.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        setIsLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      } catch (err) {
        setIsError(err)
      }
    };
    document.body.appendChild(script);
  };

  return (
    <>
      <div className={styles.review_order_container}>
        <div className={styles.data_container}>
          <header>
            <span className={styles.review_header}>Review your order</span>
          </header>
          <div className={styles.info_container}>
            <div className={styles.address_container}>
              <span className={styles.deliver}>Shipping Address:</span>
              <span className={styles.title}>{addState.custname}</span>
              <span className={styles.address}>
                {addState.address}
              </span>
              <span className={styles.town}>{addState.town}</span>
              <span className={styles.locality}>{addState.district}, {addState.state} - {addState.pincode}</span>
              <span className={styles.phone}>{addState.custMobile}</span>
            </div>
            <div className={styles.product_container}>
              <div className={styles.cart_items_header}>
                <span className={styles}>Your cart items:</span>
              </div>
              {cart.products.map((item) => (
                <div className={styles.product_item} key={item.productId}>
                  <div className={styles.image_container}>
                    <Image
                      className={styles.image}
                      src={item.productImage}
                      alt={item.productName}
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
                        <span className={styles.price}>
                          Rs.{item.price * item.cartQuantity}
                        </span>
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
          <button onClick={loadRazorpayHandler} className={styles.place_order}>
            CONTINUE PAYMENT
          </button>
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(ReviewOrder), { ssr: false });
