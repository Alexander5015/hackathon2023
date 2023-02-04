import React from "react";
import styles from "../../styles/UserInfo.module.css";

const UserInfo = ({ name, contact, about, image }) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.top}>
        <div className={styles.right}>
          <img src="/user1.jpg" alt="not-found" className={styles.image} />
        </div>
        <div className={styles.left}>
          <h3 className={styles.name}>Joe Doe</h3>
          <p className={styles.contact}>123-456-7891</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.about}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
