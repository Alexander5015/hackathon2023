import React from "react";
import styles from "../../styles/UserInfo.module.css";
// import StarIcon from '@material-ui/icons/Star';

const UserInfo = ({ name, contact, about, image }) => {
  return (
    <div className={styles.container}>
      {/* //top */}
      <div className={styles.top}>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img src="/user1.jpg" alt="not-found" className={styles.image} />
          </div>
          <div className={styles.userDesc}>
            <h3 className={styles.name}>Joe Doe</h3>
            <p className={styles.contact}>123-456-7891</p>
          </div>
        </div>
        <div className={styles.left}>
          <div></div>
        </div>
      </div>
      {/* //bottom */}
      <div className={styles.bottom}>
        <div className={styles.title}>
          <h3>About me:</h3>
        </div>
        <div className={styles.containerAbout}></div>
        <div className={styles.aboutDesc}>
          People like Calgary for many reasons, including its scenic beauty,
          thriving economy, and friendly community. It is also known for its
          rich cultural scene, outdoor recreational opportunities, and
          world-class restaurants and shopping.
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
