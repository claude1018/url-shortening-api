import styled from 'styled-components';
import breakpoint from '../../helpers/breakpoints';

interface IProps {
  widthSize: number;
}

const Grid = styled.div<IProps>`
  display: grid;
  padding-bottom: 6.875rem;
  justify-content: center;
  padding-inline: ${(props) => breakpoint(props.widthSize, '10rem', '5rem', '0.5rem')};
  background: ${(props) => breakpoint(props.widthSize, '#F0F1F6', null, '#fff')};
  grid-template-areas: ${(props) =>
    breakpoint(props.widthSize, `'one two three'`, `'one' 'two' 'three'`, `'one' 'two' 'three'`)};
  grid-template-columns: ${(props) => breakpoint(props.widthSize, 'repeat(3, 1fr)', '1fr', '1fr')};
  & > section {
    margin-left: ${(props) => breakpoint(props.widthSize, '', 'auto', 'auto')};
    margin-right: ${(props) => breakpoint(props.widthSize, '', 'auto', 'auto')};
  }
  &:first-child {
    grid-area: one;
  }
  &:nth-child(2) {
    grid-area: two;
  }
  &:last-child {
    grid-area: three;
  }
`;

export default Grid;
