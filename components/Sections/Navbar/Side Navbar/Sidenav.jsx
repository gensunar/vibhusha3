import styles from './Sidenav.module.css'
import Link from  'next/link';

const Sidenav = (props) => {
  return(
      <>
      {/* <div onClick={props.onCloseDrawer}>This is Side Nav</div> */}
      <div className={styles.sidenav}>
          <div className={styles.menu}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='#footer'>Contact</Link></li>
                <li><Link href='/login'>Blog</Link></li>
            </ul>
          </div>
      </div>
      </>
  )
};

export default Sidenav;
