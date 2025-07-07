import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import styles from './CustomImage.module.css';
import './ZoomOverride.css'; // thêm CSS custom blur nền

export default function CustomImage({ src, alt = "Mô tả ảnh", noZoom = false }) {
  const image = (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={styles.customImage}
      style={{
        cursor: noZoom ? 'default' : 'zoom-in',
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto 24px'
      }}
    />
  );

  return noZoom ? image : <Zoom>{image}</Zoom>;
}
