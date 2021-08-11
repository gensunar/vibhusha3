import styles from './ProductSlider.module.css'
import SingleProduct from '../../../pages/products/[productId]/index'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function ProductSlider(product) {
    console.log(product)
    const imgArr = product.product.productImage
    return (
        <>
            <div className={styles.main_container}>
                <div className={styles.image_container}>
                    <Slider {...settings}>
                        {imgArr.map((img, index) => {
                            return (
                                    <Image className={styles.image}
                                    src={img} alt="Vibhusha" 
                                    key={index} 
                                    height={"400px"}
                                    width= {"400px"}
                                    />
                            )
                        })}
                    </Slider>
                </div>
                <div className={styles.text_container}>
                    <p>{product.product.productName}</p>
                    <p>{product.product.price}</p>
                    <p>{product.product.productDescription}</p>
                </div>
            </div>
        </>
    )
}