// components
import Link from 'next/link';
// -- custom
import NavRoot from '../../components/NavRoot/NavRoot';

// styles
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <span className={styles['logo-icon']}>✈</span>
              <span className={styles['logo-text']}>
                <span>Free</span>roam
              </span>
            </a>
          </Link>
        </div>

        <NavRoot />
      </div>
    </header>
  );
};

export default Header;
