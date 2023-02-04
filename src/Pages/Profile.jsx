import React from "react";
import styles from "./../styles/Profile.module.css";
import PersonIcon from '@mui/icons-material/Person';
import UserInfo from "../Components/UserInfo/UserInfo";
const Profile = () => {
  return (
    <div className={styles.container}>
      <div>
        <UserInfo/>
      </div>
    </div>
  );
};

export default Profile;
