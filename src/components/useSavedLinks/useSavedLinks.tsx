import { useEffect, useState } from 'react';

function useSavedLinks() {
  const [savedLinks, setSavedLinks] = useState([]);
  const storageEvent = () => {
    if (!window.localStorage.links) return;
    setSavedLinks(JSON.parse(window.localStorage.links));
  };
  useEffect(() => {
    storageEvent();
  }, [window.localStorage.getItem('links')]);
  return { savedLinks, storageEvent };
}

export default useSavedLinks;
