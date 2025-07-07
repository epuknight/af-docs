import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './GitbookZoomImage.css'; // custom CSS riêng

export default function GitbookZoomImage({ src, alt = 'Ảnh', style = {} }) {
  return (
    <Zoom>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          height: 'auto',
          cursor: 'zoom-in',
          display: 'block',
          margin: '0 auto',
          ...style
        }}
      />
    </Zoom>
  );
}
