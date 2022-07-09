// styles
import styles from './HorizontalScroller.module.scss';

// Grid container that scrolls children horizontally
const HorizontalScroller = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default HorizontalScroller;
