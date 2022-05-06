import React from 'react';
import { PrimaryButton } from '../buttons';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import StyledIntro from './styled.intro';

function intro() {
  const width = useInnerWidth();
  return (
    <StyledIntro widthSize={width}>
      <figure>
        <img src="/images/illustration-working.svg" alt="Working person Image" />
      </figure>
      <div>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your links are performing.
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </StyledIntro>
  );
}

export default intro;
