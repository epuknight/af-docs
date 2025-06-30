import React from 'react';
import styles from './InformationText.module.css';


export default function InformationText({ children }) {
  return (
    <div className={styles.infoBox}>
      <span className={styles.icon}>ℹ️</span>
      <span className={styles.text}>{children}</span>
    </div>
  );
}
