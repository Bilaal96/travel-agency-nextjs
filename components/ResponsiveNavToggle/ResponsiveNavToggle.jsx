// styles
import styles from './ResponsiveNavToggle.module.scss';

const ResponsiveNavToggle = ({ isOpen, handleMenuToggle }) => {
  return (
    <button
      type="button"
      className={styles['nav-menu-toggle']}
      onClick={handleMenuToggle}
      aria-expanded={isOpen}
    >
      <div className={styles.hamburger}>
        <div className={styles['middle-line']} />
      </div>
    </button>
  );
};

export default ResponsiveNavToggle;
