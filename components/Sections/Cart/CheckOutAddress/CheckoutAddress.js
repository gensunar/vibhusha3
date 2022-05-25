import styles from "./CheckoutAddress.module.css";
import InputBox from "../../../Utils/UI/InputBox/InputBox";
import Link from "next/link";
import { useState } from "react";

const Checkout = () => {
  const [custName, setCustName] = useState("");
  const [custMobile, setCustMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [town, setTown] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const handleNameInput = (e) => {
    setCustName(e.target.value);
  };
  const handleMobileInput = (e) => {
    setCustMobile(e.target.value);
  };
  const handlePinInput = (e) => {
    setPincode(e.target.value);
  };
  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleLandmarkInput = (e) => {
    setLandmark(e.target.value);
  };
  const handleTownInput = (e) => {
    setTown(e.target.value);
  };
  const handleDistrictInput = (e) => {
    setDistrict.target.value;
  };
  const handleStateInput = (e) => {
    setState.target.value;
  };

  return (
    <>
      <div className={styles.checkout_container}>
        <div className={styles.checkout_left_wrapper}>
          <div className={styles.data_container}>
            <div className={styles.contact_column}>
              <span className={styles.contact_header}>CONTACT DETAILS</span>
              <InputBox
                placeholder="Name*"
                id="name"
                type="text"
                value={custName}
                onChange={handleNameInput}
              />
              <InputBox
                placeholder="Mobile No*"
                id="mobile"
                type="text"
                value={custMobile}
                onChange={handleMobileInput}
              />
            </div>
            <div className={styles.address_column}>
              <span className={styles.address_header}>Address</span>
              <InputBox
                placeholder="Pin Code*"
                id="pin"
                type="text"
                value={pincode}
                onChange={handlePinInput}
              />
              <InputBox
                placeholder="Address (House No, Street etc.)*"
                id="address"
                type="text"
                value={address}
                onChange={handleAddressInput}
              />
              <InputBox
                placeholder="Town/Village*"
                id="town"
                type="text"
                value={town}
                onChange={handleTownInput}
              />
              <InputBox
                placeholder="Landmark (optional)"
                id="landmark"
                type="text"
                value={landmark}
                onChange={handleLandmarkInput}
              />
              <div className={styles.state_details}>
                <InputBox
                  placeholder="District*"
                  id="district"
                  type="text"
                  value={district}
                  onChange={handleDistrictInput}
                />
                <InputBox
                  placeholder="State*"
                  id="state"
                  type="text"
                  value={state}
                  onChange={handleStateInput}
                />
              </div>
            </div>
            <button className={styles.continue_button}>Continue</button>
          </div>
        </div>
        <div className={styles.checkout_right_wrapper}>
          <div className={styles.right}>
            <span className={styles.summary}>Order Summary</span>
            <hr />
            <div className={styles.right_text_container}>
              <div className={styles.summary_text}>
                <span>Total MRP: </span>
                <span className={styles.summary_text_data}>Rs. 8799 </span>
              </div>
              <div className={styles.summary_text}>
                <span>Discount on MRP:</span>
                <span className={styles.summary_text_data}> Rs. 799</span>
              </div>
              <div className={styles.summary_text}>
                <span>Shipping Charges:</span>
                <span className={styles.summary_text_data}>Rs. 99 | Free</span>
              </div>
              <div className={styles.summary_text}>
                <span>Tax:</span>
                <span className={styles.summary_text_data}>NA</span>
              </div>
            </div>
            <hr />
            <div className={styles.sub_total}>
              <span>Sub Total:(2 items)</span>
              <span className={styles.total_price}>Rs. 10345</span>
            </div>
            <Link href="/user/cart/address" passHref>
              <button className={styles.place_order}>Proceed to checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
