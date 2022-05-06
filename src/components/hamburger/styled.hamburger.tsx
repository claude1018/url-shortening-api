import styled from 'styled-components';

interface IProps {
  isOpen?: boolean;
}

const StyledHamburger = styled.div<IProps>`
  text-align: center;
  cursor: pointer;
  /* height: 2rem; */
  span {
    display: inline-block;
    width: 2rem;
    height: 3px;
    background: hsl(257, 7%, 63%);
    visibility: ${(props) => (props.isOpen ? 'hidden' : 'visible')};
    transition: transform 0.3s ease-in-out;
  }
  span:before,
  span:after {
    content: '';
    display: block;
    background: hsl(257, 7%, 63%);
    width: 2rem;
    height: 3px;
    visibility: visible;
    transition: transform 0.3s ease-in-out;
  }
  span:before {
    transform: rotate(${(props) => (props.isOpen ? '45deg' : '0deg')})
      translate(${(props) => (props.isOpen ? '0.6px, -2px' : '0, -9px')});
  }
  span:after {
    transform: rotate(${(props) => (props.isOpen ? '-45deg' : '0deg')})
      translate(${(props) => (props.isOpen ? '4px, -2px' : '0, 6px')});
  }
`;

StyledHamburger.defaultProps = {
  isOpen: false
};

export default StyledHamburger;
