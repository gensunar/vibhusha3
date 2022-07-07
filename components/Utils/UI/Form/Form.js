import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { useRouter } from "next/router";
import { base_url } from "../../../../constants/url";
import InputField from "../InputField/InputField";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../../../firebase";
import { MdClear } from "react-icons/md";

const Form = ({setShow}) => {
  const router = useRouter();

  const [custName, setCustName] = useState("");
  const [custMobile, setCustMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [town, setTown] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");

  const [loading, setLoading] = useState(true);
  const [isUser, setIsUser] = useState("");
  const [success, setSuccess] = useState("")

  const [nameError, setNameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [pinError, setPinError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [townError, setTownError] = useState("");
  const [stateError, setStateError] = useState("");
  const [districtError, setDistrictError] = useState("");
  const [error, setError] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsUser(currentUser);
      } else {
        setIsUser(null);
      }
    });
  }, [isUser]);

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

      const response = await fetch(`${base_url}/cart/save-address`, {
        method: "POST",
        body: formData,
      });
      if(response){
        setSuccess("Added Successfully")
        setLoading(false);
      }
    } catch (err) {
        setError(err)
    }
  };

  return (
    <>
      <div className={styles.checkout_container}>
        <div className={styles.checkout_left_wrapper}>
          <span className={styles.close} onClick={() => setShow(false)}>
            <MdClear />
          </span>
          <form className={styles.data_container} onSubmit={handleAddress}>
            {success && (<span className={styles.success_msg}>{success}</span>)}
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
              {!loading ? (
                <button type="submit" className={styles.continue_button}>
                  Add new address
                </button>
              ) : (
                <button className={styles.continue_button}>Please wait</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
