import { useRouter } from 'next/router';

// components
import Link from 'next/link';

// styles
import styles from './NavMenu.module.scss';

// navigation map
const NAV_LINKS = [
  { name: 'home', path: '/' },
  { name: 'blog', path: '/blog' },
  { name: 'about', path: '/about' },
];

/**
 * Displayed as navigation drawer in mobile view
 * Otherwise displayed as regular top navigation bar
 */
const NavMenu = ({ isOpen }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <div className={styles['nav-menu-wrapper']} aria-expanded={isOpen}>
      <nav className={styles['nav-menu']} aria-expanded={isOpen}>
        {NAV_LINKS.map((link, index) => (
          <Link key={index} href={link.path}>
            <a
              className={
                currentRoute === link.path ? styles['active-nav-link'] : ''
              }
            >
              {link.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavMenu;
