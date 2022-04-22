import styles from './Sidenav.module.css'
import Link from  'next/link';
import { useSelector } from 'react-redux';

const Sidenav = (props) => {
  const user = useSelector((state) => state.user.user)

  return(
      <>
      {/* <div onClick={props.onCloseDrawer}>This is Side Nav</div> */}
      <div className={styles.sidenav}>
          <div className={styles.menu}>
            <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/products'>Product</Link></li>
                <li><Link href='#footer'>Contact</Link></li>
                <span className={styles.login}>{user ? (<li><Link href='/login'>Logout</Link></li>) : (<li><Link href='/login'>Login</Link></li>)
              }
                </span>
            </ul>
          </div>
      </div>
      </>
  )
};

export default Sidenav;
