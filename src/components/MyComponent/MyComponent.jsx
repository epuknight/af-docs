import React from 'react';
import styles from './MyComponent.module.css';

export default function MyComponent() {
  return (
    <div>
      <div className={styles.textPrimary}>🎨 Text using CSS variable (light/dark aware)</div>
      <div className={styles.textWarning}>⚠️ Warning text (orange)</div>
      <div className={styles.textInfo}>ℹ️ Informational text with background</div>
      <div className={styles.textGradient}>🌈 Gradient colored text</div>
      <div className={styles.dynamicText}>🌓 Adaptive contrast text for light/dark theme</div>
    </div>
  );
}