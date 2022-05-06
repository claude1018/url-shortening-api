import { useState, useEffect } from 'react';

function useInnerWidth() {
  const [width, setWidth] = useState<number>(0);
  const getWindowWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    getWindowWidth();
    window.addEventListener('resize', getWindowWidth);
    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);
  return width;
}

export default useInnerWidth;
