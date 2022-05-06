import React from 'react';
import { Intro } from '../components/intro';
import { Shorten } from '../components/shorten';
import Navbar from '../components/navbar/navbar';
import StyledTbody from '../components/tbody/tbody';
import { Features } from '../components/features';
import { Outro } from '../components/outro';
import Footer from '../components/footer/footer';
import useInnerWidth from '../components/useInnerWidth/useInnerWidth';
import Attribution from '../components/attribution/styled.attribution';

function Landing() {
  const width = useInnerWidth();
  return (
    <>
      <Navbar />
      <main style={{ position: 'relative' }}>
        <Intro />
        <Shorten />
        <StyledTbody mt="7rem" widthSize={width}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced statistics
            dashboard.
          </p>
        </StyledTbody>
        <Features />
        <Outro />
      </main>
      <footer>
        <Footer />
        <Attribution>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href="github.com/claude1018/" target="_blank">
            claude
          </a>
          .
        </Attribution>
      </footer>
    </>
  );
}

export default Landing;
