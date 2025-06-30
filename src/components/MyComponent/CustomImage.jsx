import React from 'react';
import styles from './CustomImage.module.css';


export default function CustomImage({ src, alt = "Mô tả ảnh" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.customImage}
    />
  );
}