import { useState } from 'react';

// components
import NavMenu from '../NavMenu/NavMenu';
import ResponsiveNavToggle from '../ResponsiveNavToggle/ResponsiveNavToggle';

/**
 * Navigation toggle state & handlers defined here
 * Conditionally renders mobile or desktop navigation
 */
const NavRoot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = (e) => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <NavMenu isOpen={isOpen} />
      <ResponsiveNavToggle
        isOpen={isOpen}
        handleMenuToggle={handleMenuToggle}
      />
    </>
  );
};

export default NavRoot;
