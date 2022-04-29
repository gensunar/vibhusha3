import { useSelector } from 'react-redux';
import styles from './Profile.module.css'
import { useEffect, useState } from 'react';
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [isUser, setIsUser] = useState(null)
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData !== null) setIsUser(userData)
  }, [])
  // console.log(user.user.user.displayName)
  return (
    <>
      <div className={styles.container}>
        <div className={styles.details_container}>
          <span>Account</span>
          {/* <span className={styles.profile_name}>{isUser.user.displayName}</span> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
