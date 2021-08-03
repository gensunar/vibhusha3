import styles from './ProductSlider.module.css'

export default function ProductSlider (props) {
    const imageStyle = {
        width: "600px",
        height: "500px"
    }
    return(
        <>
        <div className={styles.image_container}>
           <img src={props.url} alt="Vibhusha"  style ={imageStyle} />
        </div>               
        </>
    )
}