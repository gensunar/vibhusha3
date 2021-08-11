import styles from "./SliderItem.module.css"
import Image from 'next/image'

export default function SliderItem (props) {
    console.log(props.url)
    return(
        <div className={styles.slider_item}>
            <div className={styles.image} style= {{ backgroundImage: `url(${props.url})` }}></div>
            {/* <Image className={styles.image} src={props.url} alt= "Image" width={800} height={'60vh'} /> */}

        </div>
    )
}