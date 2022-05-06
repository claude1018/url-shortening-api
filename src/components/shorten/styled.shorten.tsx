import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';
import bgMobile from '../../../public/images/bg-shorten-mobile.svg';
import bgDesktop from '../../../public/images/bg-shorten-desktop.svg';

interface IProps {
  widthSize: number;
  isError?: boolean;
  errorMsg?: string;
}

const StyledShorten = styled.div<IProps>`
  position: ${(props) => breakpoint(props.widthSize, 'relative', null, 'static')};
  top: ${(props) => breakpoint(props.widthSize, 'calc(9vw + -2.8rem)', null, '0')};
  left: 0;
  right: 0;
  width: ${(props) => breakpoint(props.widthSize, '75%', null, '')};
  border-radius: 0.625rem;
  background: url(${(props) => breakpoint(props.widthSize, bgDesktop, null, bgMobile)}) top 0 right
      no-repeat,
    hsl(257, 27%, 26%);
  background-size: cover;
  padding: 1.5rem;
  display: flex;
  flex-direction: ${(props) => breakpoint(props.widthSize, 'row', 'column', 'column')};
  gap: 1rem;
  margin: ${(props) => breakpoint(props.widthSize, '0 auto', null, '2rem 1.5rem')};

  div {
    width: 100%;
  }
  div input {
    border: unset;
    border-radius: 0.3125rem;
    background: #fff;
    font-size: 1.125rem;
    letter-spacing: 1%;
    font-weight: 500;
    padding: 1rem;
    width: 100%;
    &::placeholder {
      color: hsl(257, 7%, 63%);
    }
  }
  div span {
    display: ${(props) => (props.isError ? 'block' : 'none')};
    color: hsl(0, 87%, 67%);
    font-style: italic;
    font-weight: 500;
    font-size: clamp(0.875rem, 0.2vw + 0.35rem, 1rem);
    margin-top: 0.625rem;
  }
  button {
    max-width: ${(props) => breakpoint(props.widthSize, '11.875rem', '100%', '100%')};
  }
`;

StyledShorten.defaultProps = {
  isError: false,
  errorMsg: 'Error goes here!'
};

export default StyledShorten;
