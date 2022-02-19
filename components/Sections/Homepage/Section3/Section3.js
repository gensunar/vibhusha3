import styles from './Section3.module.css'

export default function Section3(){
    return(
        <>
        <div className={styles.container}>
            <div className={styles.inner_container}>
                <span className={styles.header}>Our Categories</span>
                <div className={styles.card}>
                    <span className={styles.categories}>Decoupage</span>
                </div>
            </div>
        </div>
        </>
    )
}