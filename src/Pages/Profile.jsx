import React from "react";
import styles from "./../styles/Profile.module.css";
import PersonIcon from "@mui/icons-material/Person";
import UserInfo from "../Components/UserInfo/UserInfo";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@material-ui/icons/Star";

const Profile = () => {
  return (
    <div className={styles.container}>
      <UserInfo />
      <div className={styles.text}>
        <h3 className={styles.title}>Shared Activities: </h3>
      </div>
      <div className={styles.imagesContainer}>
        <img src="/nature1.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature2.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature3.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature4.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature5.jpeg" alt="not-found" className={styles.image}></img>
        <img src="/nature6.jpeg" alt="not-found" className={styles.image}></img>
      </div>
      <div className={styles.button}>
        <span className={styles.button}>
          <AddIcon className={styles.addIcon} />
        </span>
        <p>Share more ...</p>
      </div>
      <h3 className={styles.title}>Reviews: </h3>
      <div className={styles.reviewContainer}>
        <div className={styles.top}>
          <div className={styles.reviewImage}>
            <img className={styles.userImage} src="/user1.jpg" alt="user1" />
          </div>
          <h4 className={styles.reviewTitle}>Joe Doen</h4>
          <StarIcon />
        </div>
        <div className={styles.bottom}>
          <p className={styles.reviewDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
