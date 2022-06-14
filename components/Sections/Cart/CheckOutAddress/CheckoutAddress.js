import { useState, useEffect } from "react";
import styles from "./CheckoutAddress.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import InputField from "../../../Utils/UI/InputField/InputField";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../firebase";

const Checkout = () => {
  const router = useRouter();

  const [custName, setCustName] = useState("");
  const [custMobile, setCustMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [town, setTown] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUser, setIsUser] = useState("");

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pinError, setPinError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [townError, setTownError] = useState("");
  const [stateError, setStateError] = useState("");
  const [districtError, setDistrictError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setIsUser(currentUser);
    });
  }, []);

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
    setDistrict(e.target.value);
  };
  const handleStateInput = (e) => {
    setState(e.target.value);
  };

  const handleAddress = async (e) => {
    e.preventDefault();
    try {
      if (!custName) {
        return setNameError("*Name is required");
      }
      if (typeof custName !== "undefined") {
        if (!custName.match(/^[a-zA-Z ]*$/)) {
          return setNameError("Only characters are allowed");
        }
      }
      if (!custMobile) {
        return setMobileError("*Mobile is Required");
      }
      if (custMobile.length > 1) {
        if (!custMobile.match(/^[0-9]{10}$/)) {
          return setMobileError("Not a valid Phone number");
        }
      }
      if (!pincode) {
        return setPinError("*Pincode is required");
      }
      if (pincode.length > 1) {
        if (!pincode.match(/^[0-9]{6}$/)) {
          return setPinError("Not a valid Pincode");
        }
      }
      if (!address) {
        return setAddressError("*Address is required");
      }
      if (!town) {
        return setTownError("*Town is required");
      }
      if (!district) {
        return setDistrictError("*District is required");
      }
      if (typeof district !== "undefined") {
        if (!district.match(/^[a-zA-Z ]*$/)) {
          return setDistrictError("Only characters are allowed");
        }
      }
      if (!state) {
        return setStateError("*State is required");
      }
      if (typeof state !== "undefined") {
        if (!state.match(/^[a-zA-Z ]*$/)) {
          return setStateError("Only characters are allowed");
        }
      }

      const formData = new FormData();
      formData.append("id", isUser.uid);
      formData.append("custName", custName);
      formData.append("custMobile", custMobile);
      formData.append("pincode", pincode);
      formData.append("address", address);
      formData.append("town", town);
      formData.append("landmark", landmark);
      formData.append("district", district);
      formData.append("state", state);

      const response = await fetch(`http://localhost:5000/cart/save-address`, {
        method: "POST",
        body: formData,
      });
      if (response) {
        router.push("/user/cart/review-order");
      }
      console.log(response);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("isUser",isUser.uid)

  return (
    <>
      <div className={styles.checkout_container}>
        <div className={styles.checkout_left_wrapper}>
          <form className={styles.data_container} onSubmit={handleAddress}>
            <div className={styles.contact_column}>
              <span className={styles.contact_header}>CONTACT DETAILS</span>
              <div className={styles.input}>
                <InputField
                  placeholder="Name*"
                  id="name"
                  type="text"
                  value={custName}
                  onChange={handleNameInput}
                  minLength={3}
                  maxLength={18}
                  autocomplete="off"
                />
                {nameError && (
                  <span className={styles.error_message}>{nameError}</span>
                )}
              </div>
              <div className={styles.input}>
                <InputField
                  placeholder="Mobile No*"
                  id="mobile"
                  type="text"
                  value={custMobile}
                  onChange={handleMobileInput}
                  maxLength={10}
                  autocomplete="off"
                />
                {mobileError && (
                  <span className={styles.error_message}>{mobileError}</span>
                )}
              </div>
            </div>
            <div className={styles.address_column}>
              <span className={styles.address_header}>Address</span>
              <div className={styles.input}>
                <InputField
                  placeholder="Pin Code*"
                  id="pin"
                  type="text"
                  value={pincode}
                  onChange={handlePinInput}
                  autocomplete="off"
                  maxLength={6}
                />
                {pinError && (
                  <span className={styles.error_message}>{pinError}</span>
                )}
              </div>
              <div className={styles.input}>
                <InputField
                  placeholder="Address (House No, Street etc.)*"
                  id="address"
                  type="text"
                  value={address}
                  onChange={handleAddressInput}
                  autocomplete="off"
                  minLength={6}
                />
                {addressError && (
                  <span className={styles.error_message}>{addressError}</span>
                )}
              </div>
              <div className={styles.input}>
                <InputField
                  placeholder="Town/Village*"
                  id="town"
                  type="text"
                  value={town}
                  onChange={handleTownInput}
                  autocomplete="off"
                />
                {townError && (
                  <span className={styles.error_message}>{townError}</span>
                )}
              </div>
              <div className={styles.input}>
                <InputField
                  placeholder="Landmark (optional)"
                  id="landmark"
                  type="text"
                  value={landmark}
                  onChange={handleLandmarkInput}
                  autocomplete="off"
                />
              </div>
              <div className={styles.state_details}>
                <div className={styles.input}>
                  <InputField
                    placeholder="District*"
                    id="district"
                    type="text"
                    value={district}
                    onChange={handleDistrictInput}
                    autocomplete="off"
                    minLength={3}
                  />
                  {districtError && (
                    <span className={styles.error_message}>
                      {districtError}
                    </span>
                  )}
                </div>
                <div className={styles.input}>
                  <InputField
                    placeholder="State*"
                    id="state"
                    type="text"
                    value={state}
                    onChange={handleStateInput}
                    minLength={3}
                    autocomplete="off"
                  />
                  {stateError && (
                    <span className={styles.error_message}>{stateError}</span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button type="submit" className={styles.continue_button}>
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Checkout;

{
  /* <div className={styles.checkout_right_wrapper}>
          <div className={styles.right_wrapper}>
            <div className={styles.right}>
              <span className={styles.summary}>Order Summary</span>
              <hr />
              <div className={styles.right_text_container}>
                <div className={styles.summary_text}>
                  <span>Total MRP: </span>
                  <span className={styles.summary_text_data}>Rs. </span>
                </div>
                <div className={styles.summary_text}>
                  <span>Discount on MRP:</span>
                  <span className={styles.summary_text_data}> Rs. 799</span>
                </div>
                <div className={styles.summary_text}>
                  <span>Shipping Charges:</span>
                  <span className={styles.summary_text_data}>
                    Rs. 99 | Free
                  </span>
                </div>
                <div className={styles.summary_text}>
                  <span>Tax:</span>
                  <span className={styles.summary_text_data}>NA</span>
                </div>
              </div>
              <hr />
              <div className={styles.sub_total}>
                <span>Sub Total:(2 items)</span>
                <span className={styles.total_price}>Rs.</span>
              </div>
              {show && (
                <Link href="/user/cart/address" passHref>
                  <button className={styles.place_order}>PLACE ORDER</button>
                </Link>
              )}
            </div>
          </div>
        </div> */
}
