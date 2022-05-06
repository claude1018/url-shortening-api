import React, { useState } from 'react';
import StyledNavbar from './styled.navbar';
import StyledHamburger from '../hamburger/styled.hamburger';
import MobileMenu from '../menu/mobileMenu';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import DesktopMenu from '../menu/desktopMenu';
import logo from '../../../public/images/logo.svg';

function Navbar() {
  const width = useInnerWidth();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onBurgerClick = () => {
    if (!isOpen) return setIsOpen(true);
    setIsOpen(false);
  };
  const menu = width > 1020 ? <DesktopMenu /> : <MobileMenu isOpen={isOpen} />;
  return (
    <StyledNavbar widthSize={width}>
      <img src={logo} alt="Site logo" />
      {width > 1020 ? (
        <DesktopMenu />
      ) : (
        <StyledHamburger isOpen={isOpen} onClick={onBurgerClick}>
          <span></span>
          <MobileMenu isOpen={isOpen} />
        </StyledHamburger>
      )}
    </StyledNavbar>
  );
}

export default Navbar;
