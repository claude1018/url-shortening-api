import styled from 'styled-components';

interface IProps {
  width?: string;
  widthSize: number;
  mt: string;
}

const StyledTbody = styled.section<IProps>`
  background: ${(props) => (props.widthSize > 1110 ? '#F0F1F6' : '#fff')};
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: ${(props) => (props.widthSize > 1110 ? props.mt + '0 0 0' : '2.5rem')};
  h2 {
    font-size: 1.75rem;
    letter-spacing: -2%;
    color: hsl(260, 8%, 14%);
    margin-bottom: 1.5rem;
    margin: 0 auto;
    width: 100%;
    max-width: 33.25rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    letter-spacing: -5%;
    color: hsl(0, 0%, 75%);
    margin: 0 auto;
    width: 100%;
    max-width: 33.25rem;
  }
`;

export default StyledTbody;
