import InputBox from "../../../Utils/UI/InputBox/InputBox";
import styles from "./AddProduct.module.css";
import { useState, useEffect } from "react";
import { baseurl } from "../../../../constants/url";

export default function AddProduct(props) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productId, setProductId] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [actualPrice, setActualPrice] = useState("");
  const [usage, setUsage] = useState("");
  const [category, setCategory] = useState("");
  const [selectProductFile, setSelectProductFile] = useState(null);
  const [uploadedProductFile, setUploadedProductFile] = useState("");

  const [productImage, setProductImage] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  const handleNameInput = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceInput = (e) => {
    setPrice(e.target.value);
  };

  const handleActualPriceInput = (e) => {
    setActualPrice(e.target.value);
  };

  const handleDescriptionInput = (e) => {
    setProductDescription(e.target.value);
  };

  const handleImageInput = (e) => {
    console.log(e.target.files[0]);
    setSelectProductFile(e.target.files[0]);
  };

  const handleUsageInput = (e) => {
    setUsage(e.target.value);
  };

  const uploadImageHandler = async () => {
    if (!selectProductFile) {
      setUploadedProductFile("Error Encountered");
      return;
    }
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", selectProductFile);
    //console.log(selectProductFile)

    const response = await fetch(`${baseurl}/products/upload-image`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);

    if (data.isUploaded) {
      setUploadedProductFile("Uploaded successfully....");
      setProductImage(data.productImage);
    } else {
      setUploadedProductFile("There is a problem in uploading!");
    }
    setIsLoading(false);
  };

  const addProductHandler = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append("category", category);
    formData.append("productName", productName);
    formData.append("price", price);
    formData.append("actualPrice", actualPrice);
    formData.append("productDescription", productDescription);
    formData.append("productId", productId);
    formData.append("productImage", productImage);
    formData.append("usage", usage);

    const response = await fetch(`${baseurl}/products/post-products`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
    setIsLoading(false);
  };
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.card}>
          <span className={styles.header}>
            <h2>Add Product</h2>
          </span>
          <div className={styles.form_control}>
            <form onSubmit={addProductHandler}>
              <span>
                <InputBox
                  label="Product Image"
                  type="file"
                  onChange={handleImageInput}
                />
                <button
                  type="button"
                  className={styles.upload_button}
                  onClick={uploadImageHandler}
                >
                  Upload
                </button>
              </span>
              <InputBox
                placeholder="PRODUCT CATEGORY"
                label="Category"
                id="category"
                type="text"
                value={category}
                onChange={handleCategoryInput}
              />
              <InputBox
                placeholder="PRODUCT NAME"
                label="Product Name"
                id="productname"
                type="text"
                value={productName}
                onChange={handleNameInput}
              />
              <InputBox
                placeholder="ACTUAL PRICE(Numbers only without Rs.)"
                label="Actual Price"
                id="actual price"
                type="number"
                value={actualPrice}
                onChange={handleActualPriceInput}
              />
              <InputBox
                placeholder="PRICE(Numbers only without Rs.)"
                label="Price"
                id="price"
                type="number"
                value={price}
                onChange={handlePriceInput}
              />
              <InputBox
                placeholder="PRODUCT USAGE"
                label="Usage"
                id="usage"
                type="text"
                value={usage}
                onChange={handleUsageInput}
              />
              <InputBox
                placeholder="PRODUCT DESCRIPTION"
                label="Product Description"
                id="productdescription"
                type="text"
                value={productDescription}
                onChange={handleDescriptionInput}
              />
              <button type="submit" className={styles.add_button}>
                ADD PRODUCT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
