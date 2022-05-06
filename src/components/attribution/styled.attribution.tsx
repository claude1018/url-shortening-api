import styled from 'styled-components';

const Attribution = styled.div`
  background: hsl(260, 8%, 14%);
  text-align: center;
  padding-bottom: 0.675rem;
  font-size: clamp(0.675rem, 0.2vw + 0.24rem, 1rem);
  color: hsl(0, 0%, 75%);
  a {
    font-size: clamp(0.675rem, 0.2vw + 0.24rem, 1rem);

    color: hsl(257, 7%, 63%);
  }
  a:hover {
    color: hsl(180, 66%, 49%);
  }
`;

export default Attribution;
