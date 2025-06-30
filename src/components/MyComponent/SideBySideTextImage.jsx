import React from 'react';
import styles from './SideBySideTextImage.module.css';


export default function SideBySideTextImage({ text, src, width = '1em', height = '1em' }) {
  return (
    <div className={styles.wrapper}>
      <span>{text}</span>
      <img src={src} alt="" className={styles.image} style={{ width, height }} />
    </div>
  );
}

