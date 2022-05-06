import styled from 'styled-components';

interface IProps {
  bg?: string;
  hoverBg?: string;
  radius?: string;
  width?: string;
}

const PrimaryButton = styled.button<IProps>`
  border: unset;
  width: ${(props) => props.width};
  height: 3.5rem;
  border-radius: ${(props) => props.radius};
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
  radius: '1.75rem',
  bg: 'hsl(180, 66%, 49%)',
  hoverBg: '#9BE3E2',
  width: '12.3125rem'
};

export default PrimaryButton;
