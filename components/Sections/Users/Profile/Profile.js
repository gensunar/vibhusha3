import { useSelector } from 'react-redux';
import styles from './Profile.module.css'
import { useEffect, useState } from 'react';
const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const [isUser, setIsUser] = useState("")
  
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
 
    if(userData){
      setIsUser(userData)
    }else{
      setIsUser(null)
    }
  }, [])
 
  return (
    <>
      <div className={styles.container}>
        <div className={styles.details_container}>
          <span>Account</span>
          <span className={styles.profile_name}>{isUser ?(<span>{isUser.displayName}</span>):(<span>No Name</span>)}</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
