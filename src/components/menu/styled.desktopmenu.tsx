import styled from 'styled-components';

const StyledDesktopMenu = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2.75rem;
  ul li {
    display: inline;
    list-style: none;
    margin-inline: 0.75rem;
  }
  ul li a {
    text-decoration: none;
    color: hsl(257, 7%, 63%);
    font-size: 1rem;
    font-weight: 700;
  }
  div {
    width: 30%;
    text-align: right;
  }
  div > * {
    display: inline;
    margin-left: 2rem;
  }
  div a {
    text-decoration: none;
    color: hsl(257, 7%, 63%);
  }
`;

export default StyledDesktopMenu;
