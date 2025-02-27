/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./ContractAnalysisPortal.module.css";

function Sidebar({ onButtonClick }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarContent}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c41ba963aa8b7d8aa81b13400716acb38b2d1bac1fc61b6e25f82fa0b9c0585d?apiKey=91d213a11d04467fbe7727c237ada959&&apiKey=91d213a11d04467fbe7727c237ada959"
          className={styles.logo}
          alt="Company logo"
        />
        <button className={styles.uploadButton} onClick={onButtonClick}>
          <span className={styles.plusIcon}>+</span>
          <span className={styles.uploadText}>Enviar Arquivo</span>
        </button>
        <nav className={styles.navContainer}>
          <div className={styles.navItem}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/294b152c72d3220b84bec4141cfb2f985432c2084ea1bff3ba70f41bb5185e39?apiKey=91d213a11d04467fbe7727c237ada959&&apiKey=91d213a11d04467fbe7727c237ada959"
              className={styles.navIcon}
              alt=""
            />
            <span className={styles.navText}>Home</span>
          </div>
          <div className={styles.navDivider} />
        </nav>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8374c739680ad0e37fd043d99af0b9efee107397f9345ea81f3fd7550b606ff2?apiKey=91d213a11d04467fbe7727c237ada959&&apiKey=91d213a11d04467fbe7727c237ada959"
          className={styles.footerIcon}
          alt=""
        />
      </div>
    </aside>
  );
}

export default Sidebar;
