import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaMail } from "react-icons/fa";
import {HiMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <>
      <div className={styles.footer} id="footer">
        <div className={styles.footer_info}>
          <div className={styles.footer_brand}>
            <span className={styles.title}>Vibhusha</span>
            <span className={styles.nav}>Home</span>
            <span className={styles.nav}>About</span>
            <span className={styles.nav}>Contact</span>
            <span className={styles.nav}>Blog</span>
          </div>
          <div className={styles.address}>
            <span className={styles.office}>Visit Us</span>
            <span className={styles.office_details}>Lower Haflong</span>
            <span className={styles.street_line}>Dima Hasao, 788819</span>
          </div>
          <div className={styles.contact}>
            <span className={styles.contact_header}>Contact Us</span>
            <div className={styles.mail}><HiMail className={styles.himail}/><span className={styles.mail_info}>info.testing@vibhusha.com</span></div>
            <div className={styles.phone}><FaPhone className={styles.faphone}/><span className={styles.phone_info}>+911234567890</span></div>
            <span className={styles.whatsapp}></span>
          </div>
          <div className={styles.social_icon}>
            <span className={styles.connect}>Connect</span>
            <div className={styles.icon}>
              <span className={styles.icons}>
                <FaFacebook />
              </span>
              <span className={styles.icons}>
                <FaInstagram />
              </span>
              <span className={styles.icons}>
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.bottom_footer}>
          <div className={styles.bottom_two}>
            <hr className={styles.hr} />
          </div>
          <div className={styles.bottom_container}>
            <div className={styles.privacy_terms}>
              <span>&copy; VIBHUSHA. All rights reserved 2022.</span>
            </div>
            <div className={styles.terms}>
              <span className={styles.privacy}>Privacy Policy</span>
              <span className={styles.conditions}>Terms and Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
