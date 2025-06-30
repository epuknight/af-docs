import React from 'react';
import styles from './MyComponent.module.css';


export default function CenteredImage({ src, alt, width = '300px', height }) {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.centerImage}
      style={{ width, height }}
    />
  );
}

