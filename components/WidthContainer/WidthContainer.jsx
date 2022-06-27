import React from 'react';
import styles from './WidthContainer.module.scss';

const WidthContainer = ({ children }) => {
  return <div className={styles['width-container']}>{children}</div>;
};

export default WidthContainer;
