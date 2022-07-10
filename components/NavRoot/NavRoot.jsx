import { useState } from 'react';

// components
import NavMenu from '../NavMenu/NavMenu';
import ResponsiveNavToggle from '../ResponsiveNavToggle/ResponsiveNavToggle';

// utils
import { handleSwiperNoSwiping } from '../../utils/swiper';

/**
 * Navigation toggle state & handlers defined here
 * Conditionally renders mobile or desktop navigation
 */
const NavRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (e) => {
    handleSwiperNoSwiping('toggle');
    setIsOpen((prevState) => !prevState);
  };

  const closeNavMenu = () => {
    handleSwiperNoSwiping('remove');
    setIsOpen(false);
  };

  return (
    <>
      <NavMenu
        isOpen={isOpen}
        closeNavMenu={closeNavMenu}
        setIsOpen={setIsOpen}
      />
      <ResponsiveNavToggle
        isOpen={isOpen}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  );
};

export default NavRoot;
