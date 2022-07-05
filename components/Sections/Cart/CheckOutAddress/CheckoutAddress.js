import { useState, useEffect } from "react";
import styles from "./CheckoutAddress.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import dynamic from "next/dynamic";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import Form from "../../../Utils/UI/Form/Form";
import Loading from "../../../../components/Utils/UI/Loading/Loading";
import { add } from "../../../../Redux/Slices/addressSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdAdd } from "react-icons/md";
import RightWrapper from "../Cart Right Wrapper/RightWrapper";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const addState = useSelector((state) => state.address.address);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");
  const [addressResponse, setAddressResponse] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsUser(currentUser);
        getAddressHandler();
      } else {
        setIsUser(null);
      }
    });
  }, [isUser]);

  const selectHandler = (addId) => {
    dispatch(
      add({
        addId,
      })
    );
    localStorage.setItem("address", JSON.stringify(addId));
  };

  const getAddressHandler = async () => {
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
                  <div className={styles.address_data} key={index}>
                    <div className={styles.select_item}>
                      {addState.addId === item.addId ? (
                        <span
                          className={styles.selected}
                          onClick={() => selectHandler(item)}
                        >
                          Selected
                        </span>
                      ) : (
                        <span
                          className={styles.select}
                          onClick={() => selectHandler(item)}
                        >
                          Select
                        </span>
                      )}
                    </div>
                    <span className={styles.cust_name}>{item.custname}</span>
                    <span className={styles.address_text}>{item.address}</span>
                    <span className={styles.address_text}>{item.town}</span>
                    <span className={styles.district}>
                      {item.district}, {item.state} - {item.pincode}
                    </span>
                    <span className={styles.cust_mobile}>
                      Phone: {item.custMobile}
                    </span>
                  </div>
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
