import styles from "./Section1.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image_container}>
          <Image src="/images/hero.jpg" alt="Home" layout="fill" />
        </div>
        <div className={styles.text_container}>
          <span className={styles.brand_title}>VIBHUSHA</span>
          <span  className={styles.brand_tagline}>Where CREATIVITY BRIGHTENS Your Space</span>
          <span className={styles.brand_niche}>Art & Craft | Handmade</span>
          <div className={styles.read}>
            <Link href="/about">
              <button className={styles.read_button}>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
