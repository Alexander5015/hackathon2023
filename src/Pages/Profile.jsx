import React from "react";
import styles from "./../styles/Profile.module.css";
import PersonIcon from "@mui/icons-material/Person";
import UserInfo from "../Components/UserInfo/UserInfo";
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <div className={styles.text}>
        <h3 className={styles.title}>Past Trips:</h3>
      </div>
      <div className={styles.imagesContainer}>
        <img src="/nature1.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature2.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature3.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature4.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature5.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature6.jpeg" alt="not-found" className={styles.image}></img>
      </div>
      <div class={styles.button}>
        <AddIcon/>
        <p>Show more ...</p>
      </div>
    </div>
  );
};

export default Profile;
