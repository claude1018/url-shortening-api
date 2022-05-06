import React from 'react';
import { PrimaryButton } from '../buttons';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import StyledOutro from './styled.outro';

function Outro() {
  const width = useInnerWidth();
  return (
    <StyledOutro widthSize={width}>
      <h2>Boost your links today</h2>
      <PrimaryButton>Get Started</PrimaryButton>
    </StyledOutro>
  );
}

export default Outro;
