import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  widthSize: number;
}

const StyledLinks = styled.aside<IProps>`
  box-shadow: 0px 2px 4px 1px hsla(0, 0%, 75%, 0.35);
  display: ${(props) => breakpoint(props.widthSize, 'flex', null, 'block')};
  width: ${(props) => breakpoint(props.widthSize, '75%', null, '100%')};
  margin: ${(props) => breakpoint(props.widthSize, 'auto auto', '1rem auto', '0')};
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => breakpoint(props.widthSize, '1rem', null, '0')};
  max-width: ${(props) => breakpoint(props.widthSize, '95%', '95%', '100%')};

  em {
    display: inline-block;
    font-size: 1rem;
    color: hsl(255, 11%, 22%);
    margin-left: 1rem;
    font-style: normal;
    max-width: 85%;
  }
  div {
    padding: ${(props) => breakpoint(props.widthSize, '0', null, '1rem 1rem')};
    border-top: ${(props) =>
      breakpoint(props.widthSize, 'none', null, '1px solid hsla(0, 0%, 75%, 0.35)')};
    margin-top: ${(props) => breakpoint(props.widthSize, '0', null, '1rem')};
    display: ${(props) => breakpoint(props.widthSize, 'flex', null, 'block')};
    align-items: center;
    gap: 2rem;
  }

  div a {
    font-size: 1rem;
    color: hsl(180, 66%, 49%);
    text-decoration: none;
    margin: auto 0;
  }
  div button {
    margin-top: ${(props) => breakpoint(props.widthSize, '0', null, '1rem')};
    width: ${(props) => breakpoint(props.widthSize, '6.25rem', null, '100%')};
    font-size: ${(props) => breakpoint(props.widthSize, '1rem', null, '1.125rem%')};
  }
`;

export default StyledLinks;
