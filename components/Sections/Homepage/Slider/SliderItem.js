import styles from "./SliderItem.module.css"

export default function SliderItem (props) {
    return(
        <div className={styles.slider_item}>
            <img src={props.url} alt= "Image" />
        </div>
    )
}