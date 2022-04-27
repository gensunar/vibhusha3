import styles from './Sidenav.module.css'
import Link from  'next/link';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidenav = (props) => {
  const user = useSelector((state) => state.user.user)
  const [isUser, setIsUser] = useState(null)
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"))
    if(userData){
      setIsUser(userData)
    }
    else{
      setIsUser(null)
    }
  }, [])

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
                <button className={styles.login}>{isUser ? (<li><Link href='/login'><a>My Account</a></Link></li>) : (<li><Link href='/login'>Login/ SIgnup</Link></li>)
              }
                </button>
            </ul>
          </div>
      </div>
      </>
  )
};

export default Sidenav;
