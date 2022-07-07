import { useState, useEffect } from "react";
import styles from "./CheckoutAddress.module.css";
import { useRouter } from "next/router";
import Link from "next/link"; 
import dynamic from "next/dynamic";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import Form from "../../../Utils/UI/Form/Form";
import Loading from "../../../../components/Utils/UI/Loading/Loading";
import { MdAdd } from "react-icons/md";
import RightWrapper from "../Cart Right Wrapper/RightWrapper";
import { CheckoutAddressItem } from "./CheckoutAddressItem/CheckoutAddressItem";

const Checkout = () => {
  const router = useRouter();
  

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");
  const [addressResponse, setAddressResponse] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false)
      setIsUser(currentUser)
    });
    return unsubscribe
  }, []);

  useEffect(() => {
    if(isUser){
      getAddressHandler()
    }
  }, [isUser, addressResponse])

  const getAddressHandler = async () => {
    try{
      const res = await fetch(
        `https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Address/address${isUser.uid}.json`
        );
        const data = await res.json();
        
        let address = [];
        for (const i in data) {
          const addressdata = data[i];
          address.push(addressdata);
        }
        setAddressResponse(address);
        setLoading(false);
      }catch(err){
        setError(err)
      }
  };
  return (
    <>
      <div className={styles.checkout_container}>
        {loading && <Loading />}
        {!loading && (
          <>
            <div className={styles.address_container}>
              <div className={styles.address}>
                <div className={styles.top_block}>
                  <span className={styles.address_header}>
                    Select delivery address
                  </span>
                  <button
                    type="submit"
                    className={styles.continue_button}
                    onClick={() => setShow(true)}
                  >
                    <span className={styles.add_icon}>
                      <MdAdd />
                    </span>
                    <span className={styles.add_header}>Add new address</span>
                  </button>
                </div>
                {addressResponse.map((item, index) => (
                  <CheckoutAddressItem 
                    key= {index}
                    name= {item.custname}
                    address= {item.address}
                    district= {item.district}
                    state= {item.state}
                    pincode= {item.pincode}
                    town={item.town}
                    phone= {item.custMobile}
                    id= {item.addId}
                    // {...item}
                  />
                ))}
              </div>
            </div>
            <div className={styles.right_wrapper}>
              <RightWrapper />
              <Link href="/user/cart/review-order" passHref>
                <button className={styles.place_order}>CONTINUE</button>
              </Link>
            </div>
          </>
        )}
        {show && <Form setShow={setShow} />}
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Checkout), { ssr: false });