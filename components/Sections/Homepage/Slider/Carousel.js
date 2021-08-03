import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css"
import { useState, useEffect } from "react";
import SliderItem from './SliderItem'

const settings = {
  dots:true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true
};
export default function Carousel(props) {
 const [images, setImages] = useState([]);
 const [isLoading, setIsLoading] = useState(true)

 const fetchImages = async () => {
  const res = await fetch("https://picsum.photos/v2/list?limit=10")
  const jsonResponse = await res.json()

  let slidePic = []
 for (const id in jsonResponse){
  const poster = jsonResponse[id]
  slidePic.push(poster)
  console.log(slidePic)
 }
  setImages(slidePic)
  setIsLoading(false) 

 }
 useEffect(() => {
    fetchImages()
 }, [])
 return(
   <>
    <div className={styles.main_carousel_div}>
      {isLoading && (
       <div className={styles.loading}>
         <p>Loading.....</p>
         </div>
      )}
      {!isLoading && (
        <Slider {...settings} className={styles.slider}>
            {images.map((elem) => (
              <SliderItem
                key = {elem.id}
                url = {elem.download_url}
              />
            ))}
        </Slider>
      )}
    </div>
   </>
 )
}