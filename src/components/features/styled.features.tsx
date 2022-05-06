import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  align?: string;
  tail?: boolean;
  widthSize: number;
  move?: string;
}

const Features = styled.section<IProps>`
  text-align: ${(props) => props.align};
  padding: 5.125rem 2.25rem 2.625rem 2.25rem;
  background: #fff;
  border-radius: 0.5rem;
  max-width: ${(props) => breakpoint(props.widthSize, '100%', null, '365px')};
  box-shadow: 0px 0.5px 2px 0.5px #e0e0e0;
  margin: 5.75rem 1rem ${(props) => breakpoint(props.widthSize, '40%', null, '1rem')} 1rem;

  transform: translateY(${(props) => props.move});
  position: relative;
  &:after {
    content: '';
    display: ${(props) => (props.tail ? 'inline-block' : 'none')};
    background: hsl(180, 66%, 49%);
    height: clamp(3rem, 7vw + 1rem, 14rem);
    width: 0.5rem;
    position: absolute;
    top: ${(props) => breakpoint(props.widthSize, '50%', null, '100%')};
    bottom: ${(props) => breakpoint(props.widthSize, '50%', null, '-3rem')};
    left: 0;
    right: ${(props) => breakpoint(props.widthSize, 'calc(-76% + -14vw)', null, '0')};
    margin: 0 auto;
    transform: rotate(${(props) => breakpoint(props.widthSize, '90deg', null, '0deg')});
  }
  figure {
    position: absolute;
    top: -2.75rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    background: hsl(257, 27%, 26%);
    border-radius: 50%;
    padding: 1.25rem;
    width: 5.5rem;
    height: 5.5rem;
  }
  figure img {
    width: 100%;
    height: auto;
  }
  h2 {
    font-size: 1.75rem;
    letter-spacing: -2%;
    color: hsl(260, 8%, 14%);
    margin-bottom: 1.5rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -5%;
    color: hsl(0, 0%, 75%);
  }
`;

Features.defaultProps = {
  align: 'center',
  move: '0%'
};

export default Features;
