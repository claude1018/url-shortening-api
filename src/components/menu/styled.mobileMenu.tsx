import styled from 'styled-components';

interface IProps {
  isOpen?: boolean;
}

const StyledMobileMenu = styled.div<IProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  background: hsl(257, 27%, 26%);
  border-radius: 0.875rem;
  text-align: center;
  padding: 2.5rem 1.5rem;
  width: 90%;
  margin: 0 auto;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 95%;
  z-index: 10;
  & > *:not(:first-child) {
    margin-top: 2.25rem;
  }
  & > * {
    display: block;
  }
  a {
    font-size: 1.125rem;
    font-weight: 700;
    color: white;
    text-decoration: none;
  }
  div {
    border-top: 1px solid hsl(0, 0%, 75%);
  }
  div > * {
    display: block;
    margin-top: 2.25rem;
  }
`;

StyledMobileMenu.defaultProps = {
  isOpen: false
};

export default StyledMobileMenu;
