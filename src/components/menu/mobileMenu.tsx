import React from 'react';
import { PrimaryButton } from '../buttons';
import StyledMobileMenu from './styled.mobileMenu';

interface IProps {
  isOpen?: boolean;
}

function MobileMenu(props: IProps) {
  return (
    <StyledMobileMenu isOpen={props.isOpen}>
      <a href="#features">Features</a>
      <a href="#pricing">Pricing</a>
      <a href="#resources">Resources</a>
      <div>
        <a href="#login">Login</a>
        <PrimaryButton width="100%">Sign Up</PrimaryButton>
      </div>
    </StyledMobileMenu>
  );
}

export default MobileMenu;
