import InputBox from '../../../Utils/UI/InputBox/InputBox'
import styles from './AddProduct.module.css'
import { useState, useEffect } from 'react'
import { baseurl } from '../../../../constants/url'

export default function AddProduct(props) {
    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState('')
    const [productId, setProductId] = useState('')
    const [productDescription, setProductDescription] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const [selectProductFile, setSelectProductFile] = useState(null)
    const [uploadedProductFile, setUploadedProductFile] = useState('')

    const [productImage, setProductImage] = useState('')



    const handleNameInput = (e) => {
        setProductName(e.target.value)
    }

    const handlePriceInput = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionInput = (e) => {
        setProductDescription(e.target.value)
    }

    const handleImageInput = (e) => {
        console.log(e.target.files[0])
        setSelectProductFile(e.target.files[0])
    }

    const uploadImageHandler = async () => {
        if (!selectProductFile) {
            setUploadedProductFile("Error Encountered")
            return
        }
        setIsLoading(true)

        const formData = new FormData()
        formData.append("file", selectProductFile)
        //console.log(selectProductFile)

        const response = await fetch(`${baseurl}/products/upload-image`,
            {
                method: "POST",
                body: formData
            })

        const data = await response.json()
        console.log(data)

        if (data.isUploaded) {
            setUploadedProductFile("Uploaded successfully....")
            setProductImage(data.productImage)
        } else {
            setUploadedProductFile("There is a problem in uploading!")
        }
        setIsLoading(false)
    }

    const addProductHandler = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        const formData = new FormData()
        formData.append("productName", productName)
        formData.append("price", price)
        formData.append("productDescription", productDescription)
        formData.append("productId", productId)
        formData.append("productImage", productImage)

        const response = await fetch(`${baseurl}/products/post-products`, {
            method: "POST",
            body: formData
        })
        const data = await response.json()
        console.log(data)
        setIsLoading(false)
    }

    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.card}>
                    <span className={styles.header}><h2>Add Product</h2></span>
                    <h2>{ }</h2>
                    <div className={styles.form_control}>
                        <form onSubmit={addProductHandler}>
                            <span>
                            <InputBox
                                label="Product Image"
                                type="file"
                                onChange={handleImageInput}
                            />
                            <button type="button" className={styles.upload_button} onClick={uploadImageHandler}>Upload</button>
                            </span>
                            <hr />
                            <InputBox
                                label="Product Name"
                                id="productname"
                                type="text"
                                value={productName}
                                onChange={handleNameInput}
                            />
                            <InputBox
                                label="Price"
                                id="price"
                                type="text"
                                value={price}
                                onChange={handlePriceInput}
                            />
                            <InputBox
                                label="Product Description"
                                id="productdescription"
                                type="text"
                                value={productDescription}
                                onChange={handleDescriptionInput}
                            />
                            <button type="submit" className={styles.add_button}>Add Product</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}