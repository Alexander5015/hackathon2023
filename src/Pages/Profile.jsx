import React from "react";
import styles from "./../styles/Profile.module.css";
import PersonIcon from "@mui/icons-material/Person";
import UserInfo from "../Components/UserInfo/UserInfo";
import AddIcon from "@mui/icons-material/Add";
import StarRateIcon from "@mui/icons-material/StarRate";

import { useState } from "react";
const Profile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.empty}>
        {/* Empty div */}
      </div>
      <UserInfo />

      <div className="tabs">
        <button
          className={` ${activeTab === "tab1" && "active"}`}
          onClick={() => handleTabClick("tab1")}
        >
          Shared Activities
        </button>
        <button
          className={`tab-btn ${activeTab === "tab2" && "active"}`}
          onClick={() => handleTabClick("tab2")}
        >
          Reviews
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "tab1" && (
          <div>
            <div className={styles.text}>
              <h3 className={styles.title}>Shared Activities: </h3>
            </div>
            <div className={styles.imagesContainer}>
              <img
                src="/yyc/yyc.jpeg"
                alt="not-found"
                className={styles.image}
              ></img>
              <img
                src="/yyc/yyc2.jpeg"
                alt="not-found"
                className={styles.image}
              ></img>
              <img
                src="/yyc/yyc3.jpeg"
                alt="not-found"
                className={styles.image}
              ></img>
              <img
                src="/yyc/yyc4.webp"
                alt="not-found"
                className={styles.image}
              ></img>
              <img
                src="/yyc/yyc5.webp"
                alt="not-found"
                className={styles.image}
              ></img>
              <img
                src="/yyc/yyc6.jpg"
                alt="not-found"
                className={styles.image}
              ></img>
            </div>
            <div className={styles.buttonContainer}>
              <button
                className={` ${activeTab === "tab1" && "active"}`}
                onClick={() => handleTabClick("tab1")}
              >
                Share more
              </button>
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div className={styles.reviewContainer}>
              <h3 className={styles.title}>Reviews: </h3>
              <div className={styles.top}>
                <div className={styles.reviewImage}>
                  <img
                    className={styles.userImage}
                    src="/user1.jpg"
                    alt="user1"
                  />
                </div>
                <h4 className={styles.reviewTitle}>Joe Doen</h4>
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </div>
              <div className={styles.bottom}>
                <p className={styles.reviewDesc}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, molestiae quas vel sint commodi repudiandae
                  consequuntur voluptatum laborum numquam blanditiis harum
                  quisquam eius sed odit fugiat iusto fuga praesentium optio.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
