import React from 'react';
import StyledDesktopMenu from './styled.desktopmenu';
import { PrimaryButton } from '../buttons';

function DesktopMenu() {
  return (
    <StyledDesktopMenu>
      <ul>
        <li key="top-features">
          <a href="#features">Features</a>
        </li>
        <li key="top-pricing">
          <a href="#pricing">Pricing</a>
        </li>
        <li key="top-resources">
          <a href="#resources">Resources</a>
        </li>
      </ul>
      <div>
        <a href="#login">Login</a>
        <PrimaryButton customWidth="8rem">Sign Up</PrimaryButton>
      </div>
    </StyledDesktopMenu>
  );
}

export default DesktopMenu;
