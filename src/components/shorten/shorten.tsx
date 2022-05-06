import React, { useRef, useState } from 'react';
import { PrimaryButton } from '../buttons';
import shortenData from '../../helpers/fetchData';
import StyledShorten from './styled.shorten';
import useSavedLinks from '../useSavedLinks/useSavedLinks';
import useInnerWidth from '../useInnerWidth/useInnerWidth';
import breakpoint from '../../helpers/breakpoints';
import Links from './links';

function Shorten() {
  const width = useInnerWidth();
  const input = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { savedLinks, storageEvent } = useSavedLinks();
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Please add a link');
  const onClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!input.current.value) return setIsError(true);
    setIsError(false);
    const button = event.target as HTMLButtonElement;
    const toShorten = input.current.value;
    button.textContent = 'Please wait...';
    button.disabled = true;
    const result = await shortenData(toShorten, setIsError, setErrorMsg);
    if (result.error) {
      button.textContent = 'Shorten It!';
      button.disabled = false;
      return;
    }
    const newLink = {
      original: toShorten,
      shortenedLink: result
    };
    if (window.localStorage.links) {
      const array = JSON.parse(window.localStorage.links).reverse().concat([newLink]);
      window.localStorage.setItem('links', JSON.stringify(array.reverse()));
    } else {
      window.localStorage.setItem('links', JSON.stringify([newLink]));
    }
    storageEvent();
    input.current.value = result;
    button.textContent = 'Shorten It!';
  };
  return (
    <>
      <StyledShorten widthSize={width} isError={isError}>
        <div>
          <input ref={input} type="text" placeholder="Shorten a link..." />
          <span>{errorMsg}</span>
        </div>
        <PrimaryButton radius="0.3125rem" width="100%" onClick={onClick}>
          Shorten It!
        </PrimaryButton>
      </StyledShorten>
      <div
        style={{
          padding: breakpoint(width, '10rem 0 2rem 0', null, '2rem 1.5rem'),
          background: breakpoint(width, '#F0F1F6', null, '#fff')
        }}
      >
        {savedLinks.map((links: { original: string; shortenedLink: string }, index: number) => {
          if (index > 4) return;
          return (
            <Links
              key={links.shortenedLink + Math.floor(Math.random() * index)}
              from={links.original}
              to={links.shortenedLink}
            />
          );
        })}
      </div>
    </>
  );
}

export default Shorten;
