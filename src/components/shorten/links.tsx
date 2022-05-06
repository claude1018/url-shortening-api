import React, { useRef } from 'react';
import StyledLinks from './styled.links';
import { PrimaryButton } from '../buttons';
import useInnerWidth from '../useInnerWidth/useInnerWidth';

interface IProps {
  from: string;
  to: string;
}

function Links(props: IProps) {
  const width = useInnerWidth();
  const result = useRef<HTMLAnchorElement | null>(null);
  const onCopy = (event: React.MouseEvent<HTMLButtonElement>) => {
    const toCopy = result.current?.innerText as string;
    navigator.clipboard.writeText(toCopy).then(() => {
      const target = event.target as HTMLButtonElement;
      target.innerHTML = 'Copied!';
      target.style.background = 'hsl(257, 27%, 26%)';
    });
  };
  return (
    <StyledLinks widthSize={width}>
      <em>{props.from.length > 50 ? props.from.substring(0, 45) + '...' : props.from}</em>
      <div>
        <a ref={result} href={props.to} target="_blank">
          {props.to}
        </a>
        <PrimaryButton radius="0.5rem" width="100%" onClick={onCopy}>
          Copy
        </PrimaryButton>
      </div>
    </StyledLinks>
  );
}

export default Links;
