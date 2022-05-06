import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  widthSize: number;
}

const StyledNavbar = styled.nav<IProps>`
  display: flex;
  justify-content: ${(props) => breakpoint(props.widthSize, 'flex-start', null, 'space-between')};
  align-content: center;
  padding: 2.625rem 1.375rem;
  position: relative;
  background-color: #fff;
  padding-inline: ${(props) => breakpoint(props.widthSize, '11.2rem', '5rem', '1.5rem')};
  img {
    object-fit: contain;
  }
`;

export default StyledNavbar;
