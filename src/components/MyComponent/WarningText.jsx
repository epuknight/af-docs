import React from 'react';
import styles from './WarningText.module.css';

export default function WarningText({ children }) {
  return (
    <div className={styles.alert}>
      ⚠️ {children}
    </div>
  );
}