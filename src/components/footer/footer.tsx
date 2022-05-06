import React from 'react';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import StyledFooter from './styled.footer';
import logo from '../../../public/images/logo.svg';

function Footer() {
  const width = useInnerWidth();
  return (
    <StyledFooter widthSize={width}>
      <img src={logo} alt="site lo" />
      <div>
        <strong>Features</strong>
        <ul>
          <li key="link-shortening">
            <a href="#link-shortening">Link Shortening</a>
          </li>
          <li key="branded-links">
            <a href="#branded-links">Branded Links</a>
          </li>
          <li key="analytics">
            <a href="#analytics">Analytics</a>
          </li>
        </ul>
      </div>
      <div>
        <strong>Resources</strong>
        <ul>
          <li key="blog">
            <a href="#blog">Blog</a>
          </li>
          <li key="developers">
            <a href="#developers">Developers</a>
          </li>
          <li key="support">
            <a href="#support">Support</a>
          </li>
        </ul>
      </div>
      <div>
        <strong>Company</strong>
        <ul>
          <li key="about">
            <a href="#about">About</a>
          </li>
          <li key="our-team">
            <a href="#our-team">Our Team</a>
          </li>
          <li key="carrers">
            <a href="#careers">Careers</a>
          </li>
          <li key="contact">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-links">
        <i className="fa-brands fa-facebook-square"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </StyledFooter>
  );
}

export default Footer;
