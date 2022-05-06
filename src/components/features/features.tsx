import React from 'react';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import StyledFeature from './styled.features';
import Grid from './styled.features.grid';
import iconBrand from '../../../public/images/icon-brand-recognition.svg';
import iconDetailed from '../../../public/images/icon-detailed-records.svg';
import iconCustomizable from '../../../public/images/icon-fully-customizable.svg';

function Features() {
  const width = useInnerWidth();
  const move = {
    secondChild: width > 1110 ? '20%' : '0%',
    thirdChild: width > 1110 ? '40%' : '0%'
  };
  return (
    <>
      <Grid widthSize={width}>
        <StyledFeature widthSize={width} tail={true}>
          <figure>
            <img src={iconBrand} alt="icon-brand-recognition.svg" />
          </figure>
          <h2>Brand Recognition</h2>
          <p>
            {' '}
            Boost your brand recognition with each click. Generic links don’t mean a thing. Branded
            links help instil confidence in your content.
          </p>
        </StyledFeature>
        <StyledFeature widthSize={width} tail={true} move={move.secondChild}>
          <figure>
            <img src={iconDetailed} alt="icon-detailed-records.svg" />
          </figure>
          <h2>Detailed Records</h2>
          <p>
            Gain insights into who is clicking your links. Knowing when and where people engage with
            your content helps inform better decisions.
          </p>
        </StyledFeature>
        <StyledFeature widthSize={width} move={move.thirdChild}>
          <figure>
            <img src={iconCustomizable} alt="icon-fully-customizable.svg" />
          </figure>
          <h2>Fully Customizable</h2>
          <p>
            Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement.
          </p>
        </StyledFeature>
      </Grid>
    </>
  );
}

export default Features;
