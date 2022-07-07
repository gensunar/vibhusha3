import styles from "./CheckoutAddressItem.module.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../../../../Redux/Slices/addressSlice";

export const CheckoutAddressItem = (item) => {
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState({});
  const addState = useSelector((state) => state.address.address);

  const selectHandler = (addId) => {
    dispatch(
      add({
        addId,
      })
    );
    localStorage.setItem("address", JSON.stringify(addId));
  };

  return (
    <div className={styles.checkout_container}>
      <div className={styles.address_data}>
        <div className={styles.select_item}>
          {addState?.id == item.id ? (
            <span className={styles.selected}>Selected</span>
          ) : (
            <span className={styles.select} onClick={() => selectHandler(item)}>
              Select
            </span>
          )}
        </div>
        <span className={styles.cust_name}>{item.name}</span>
        <span className={styles.address_text}>{item.address}</span>
        <span className={styles.address_text}>{item.town}</span>
        <span className={styles.district}>
          {item.district}, {item.state} - {item.pincode}
        </span>
        <span className={styles.cust_mobile}>Phone: {item.phone}</span>
      </div>
    </div>
  );
};
