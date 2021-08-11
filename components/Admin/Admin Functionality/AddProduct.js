import InputBox from '../../Utils/UI/InputBox/InputBox'
import styles from './AddProduct.module.css'
import { useState, useEffect } from 'react'

export default function AddProduct(props) {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [productImage, setProductImage] = useState('')

    const [selectBookFile, setSelectBookFile] = useState(null)
    const [selectedBookFile, setSelectedBookFile]= useState('')

    const addProductHandler = () => {

    }


    const handleNameInput = (e) => {
        setProductName(e.target.value)
    }

    const handlePriceInput = (e) => {
        setProductPrice(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setProductDescription(e.target.value)
    }

    const handleImageInput = (e) => {
        console.log(e.target.files[0])
        setSelectBookFile(e.target.files[0])
    }

    const uploadImageHandler = async () => {
        if(!selectBookFile) {
            setSelectedBookFile("Error Encountered")
            return
        }

    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.card}>
                    <span className={styles.header}><h2>Add Product</h2></span>
                    <div className={styles.form_control}>
                        <form>
                            <InputBox
                                label="Product Image"
                                id="productimage"
                                type="file"
                                value={productImage}
                                onChange={handleImageInput}
                            />
                            <button className={styles.upload_button} onClick={uploadImageHandler}>Upload</button>
                            <hr />
                            <InputBox
                                label="Product Name"
                                id="productname"
                                type="text"
                                value={productName}
                                onChange={handleNameInput}
                            />
                            <InputBox
                                label="Product Price"
                                id="productprice"
                                type="text"
                                value={productPrice}
                                onChange={handlePriceInput}
                            />
                            <InputBox
                                label="Product Description"
                                id="productdescription"
                                type="text"
                                value={productDescription}
                                onChange={handleDescriptionInput}
                            />
                            <button className={styles.add_button} onClick={addProductHandler}>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}