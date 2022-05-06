import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';
import bgMobile from '../../../public/images/bg-boost-mobile.svg';
import bgDesktop from '../../../public/images/bg-boost-desktop.svg';

interface IProps {
  widthSize: number;
}

const StyledOutro = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: url(${(props) => breakpoint(props.widthSize, bgDesktop, null, bgMobile)}) no-repeat,
    hsl(257, 27%, 26%);
  background-size: cover;
  text-align: center;
  padding: 6.25rem 0;
  h2 {
    color: #fff;
    font-size: clamp(1.75rem, 3vw + 1rem, 2.5rem);
    letter-spacing: 1px;
  }
  button {
    margin: 0 auto;
  }
`;

export default StyledOutro;
