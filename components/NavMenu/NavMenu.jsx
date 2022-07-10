import { useRouter } from 'next/router';
import useClickOutside from '../../hooks/useClickOutside';

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
const NavMenu = ({ isOpen, closeNavMenu }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  // Close mobile NavMenu on click outside of component
  const menuRef = useClickOutside(closeNavMenu, 'nav-menu');

  return (
    <div
      ref={menuRef}
      className={styles['nav-menu-wrapper']}
      aria-expanded={isOpen}
    >
      <nav className={styles['nav-menu']} aria-expanded={isOpen}>
        {NAV_LINKS.map((link, index) => (
          <Link key={index} href={link.path}>
            <a
              className={
                currentRoute === link.path ? styles['active-nav-link'] : ''
              }
              onClick={closeNavMenu}
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
