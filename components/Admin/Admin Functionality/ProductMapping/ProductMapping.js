import { useEffect, useState } from "react";
import styles from "./ProductMapping.module.css";
import Button from "../../../../components/Utils/UI/Button/Button";
import Image from 'next/image'
import { baseurl } from "../../../../constants/url";

export default function ProductMapping(props) {
  const [product, setProduct] = useState([]);

  const handleDeleteInput = async () => {
    const delRes = await fetch(`${baseurl}products/delete-product/`)
  }

  const fetchData = async () => {
    const res = await fetch(
      `https://vibhashu-c0ea3-default-rtdb.firebaseio.com/Products.json`
    );
    const data = await res.json();

    let allProduct = [];
    for (const productId in data) {
      const ProductData = data[productId];
      allProduct.push(ProductData);
    }
    setProduct(allProduct);
  };
  console.log(product);
  return (
    <>
      <div className={styles.main_container}>
        <span className={styles.view_product} onClick={fetchData}>
          View all Product
        </span>
        <div className={styles.content}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trtitle}>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Desccription</th>
                <th>Action</th>
              </tr>
            </tbody>
            {product.map((item) => (
              <tbody key={item.productId}>
                <tr className={styles.tr_data_title}>
                <td>...{item.productId.slice(10,15)}</td>
                <td className={styles.image} style={{backgroundImage: `url(${item.productImage})`}}></td>
                <td>{item.productName}</td>
                <td>&#8377; {item.price}</td>
                <td>{item.productDescription.slice(0, 5)}...</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button className={styles.button} onClick={() => handleDeleteInput(item.productId)}>Delete</button>
                </td>
                </tr>
              </tbody>
            ))}
          </table>
          {/* {product.map((item) => {
                        return (
                            <div className={styles.product_container} key={item.productId}>
                                <div className={styles.text_container}>    
                                     <div className={styles.product_data}><span className={styles.product_key} >Product ID:</span> {item.productId}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Name:</span> {item.productName}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Price:</span> {item.price}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>ProductURL:</span> {item.productImage}</div>
                                    <div className={styles.product_data}><span className={styles.product_key}>Product Desc:</span> {item.productDescription}</div>               
                                </div>
                            </div>          
                    })} */}
        </div>
      </div>
    </>
  );
}
