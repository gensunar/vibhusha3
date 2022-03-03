import styles from "./Section1.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Section1() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className={styles.container}>
      {isLoading && (<span>Loading....</span>)}
      {!isLoading && (
        <>
          <div className={styles.image_container}>
            <Image
              src="/images/hero.jpg"
              alt="Home"
              layout="fill"
              className={styles.image}
            />
          </div>
          <div className={styles.text_container}>
            <span className={styles.brand_title}>VIBHUSHA</span>
            <span className={styles.brand_tagline}>
              Where CREATIVITY BRIGHTENS Your Space
            </span>
            <span className={styles.brand_niche}>Art & Craft | Handmade</span>
            <div className={styles.read}>
              <Link href="/about" passHref>
                <button className={styles.read_button}>Read More</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
