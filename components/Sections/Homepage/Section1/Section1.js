import styles from './Section1.module.css'
import Image from 'next/image'
import background from '../../../../public/images/background.jpg'

export default function Section1() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.image_container}>
                <Image
                    src ={background}
                    alt ="Home"
                />
            </div>
            <div className={styles.text_container}>
                <h1>VIBHUSHA</h1>
                <h2>Where <span>CREATIVITY BRIGHTENS</span> Your Space</h2>
                <h3>Art & Craft | Handmade</h3>
                <button className={styles.read_button}>Read More</button>
            </div>
        </div>
        </>
    )
}