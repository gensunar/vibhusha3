import React from "react";
import ProductMapping from "../ProductMapping";
import AddProduct from "../../Add Product/AddProduct";
import styles from "./ViewProduct.module.css";
import { useState } from "react";

const ViewProduct = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);

  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.content}>
          <span
            className={styles.button}
            onClick={() => {
              setOpenAddProduct(!openAddProduct);
            }}
          >
            Add Product
          </span>
        </div>
        <div className={styles.add_product}>
          {openAddProduct && <AddProduct />}
        </div>
        <ProductMapping />
        {/* <div className={styles.card}>
             <div className={styles.card_content}>Add Product</div>
           </div>
           <div className={styles.card}>
             <div className={styles.card_content}>View Product</div>
           </div> */}
      </div>
    </>
  );
};

export default ViewProduct;
