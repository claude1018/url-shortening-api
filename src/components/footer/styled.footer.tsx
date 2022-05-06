import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  widthSize: number;
}

const StyledFooter = styled.nav<IProps>`
  background: hsl(260, 8%, 14%);
  display: grid;
  grid-template-areas: ${(props) =>
    breakpoint(
      props.widthSize,
      `'one two three four five'`,
      `'one two three four' 'five five five five'`,
      `'one' 'two' ' three' 'four' 'five'`
    )};
  gap: 2rem;
  grid-template-columns: ${(props) =>
    breakpoint(props.widthSize, `'2fr repeat(4, 1fr)'`, null, '1fr')};
  padding: 3.125rem clamp(2.5rem, 10vw + 3rem, 10.38rem);
  img {
    margin: 0 auto;
    filter: brightness(0) invert(1);
    position: ${(props) => breakpoint(props.widthSize, 'relative', null, 'static')};
    left: calc(-50% + 4rem);
  }
  div {
    text-align: center;
  }
  div strong {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
  }
  div ul {
    margin-top: 1.375rem;
  }
  div ul li {
    padding: 0.5rem 0;
    list-style: none;
  }
  div ul li a {
    text-decoration: none;
    color: hsl(257, 7%, 63%);
    font-size: 1rem;
  }
  div ul li a:hover {
    color: hsl(180, 66%, 49%);
  }
  i {
    color: #fff;
    margin-left: 1rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  i:hover {
    color: hsl(180, 66%, 49%);
  }
  &:first-child {
    grid-area: one;
  }
  &:nth-child(2) {
    grid-area: two;
  }
  &:nth-child(3) {
    grid-area: three;
  }
  &:nth-child(4) {
    grid-area: four;
  }
  &:last-child {
    grid-area: five;
  }
`;

export default StyledFooter;
