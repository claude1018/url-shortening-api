import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  widthSize: number;
}

const StyledIntro = styled.div<IProps>`
  background-color: #fff;
  text-align: ${(props) => breakpoint(props.widthSize, 'left', null, 'center')};
  position: relative;
  margin-bottom: ${(props) => breakpoint(props.widthSize, '1rem', null, '5.375rem')};
  display: grid;
  grid-template-areas: ${(props) => breakpoint(props.widthSize, `'two one'`, null, `'one' 'two'`)};
  gap: 2rem;
  grid-template-columns: ${(props) => breakpoint(props.widthSize, '1fr 1fr', null, '1fr')};
  align-items: center;
  padding-inline-start: ${(props) => breakpoint(props.widthSize, '9.75rem', null, '')};

  figure {
    width: 100%auto;
    height: auto;
    overflow: hidden;
    margin-bottom: -2.5rem;
    position: relative;
    grid-area: one;
  }
  figure img {
    transform: scale(${(props) => breakpoint(props.widthSize, '1', '0.85', '0.6')})
      translateX(${(props) => breakpoint(props.widthSize, '0%', '20%', '-22%')});
  }
  div {
    padding: 0 1.5rem;
    grid-area: two;
  }
  h1 {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    line-height: clamp(3rem, 4vw + 1rem, 7rem);
    letter-spacing: ${(props) => breakpoint(props.widthSize, '1.5px', null, '0')};
    color: hsl(260, 8%, 14%);
    margin-bottom: 1.5625rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.875rem;
    color: hsl(0, 0%, 75%);
  }
  button {
    margin-top: 1.875rem;
  }
`;

export default StyledIntro;
