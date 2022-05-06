import styled from 'styled-components';

interface IProps {
  bg?: string;
  hoverBg?: string;
  customRadius?: string;
  customWidth?: string;
}

const PrimaryButton = styled.button<IProps>`
  border: unset;
  width: ${(props) => props.customWidth};
  height: 3.5rem;
  border-radius: ${(props) => props.customRadius};
  background: ${(props) => props.bg};
  color: #fff;
  font-weight: 700;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.hoverBg};
  }
`;

PrimaryButton.defaultProps = {
  customRadius: '1.75rem',
  bg: 'hsl(180, 66%, 49%)',
  hoverBg: '#9BE3E2',
  customWidth: '12.3125rem'
};

export default PrimaryButton;
