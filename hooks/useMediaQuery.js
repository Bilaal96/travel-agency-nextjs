import { useState } from 'react';
import { useEffect } from 'react';
import useEventListener from './useEventListener';

/**
 * @return { boolean } true if mediaQueryString matches, otherwise returns false
 */
export default function useMediaQuery(mediaQueryString) {
  /**
   * NOTE: mediaQueryList represents the return value of window.matchMedia(), which is of type: MediaQueryList
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia#return_value
   * i.e. It is not an array */
  const [mediaQueryList, setMediaQueryList] = useState(null);
  const [isMatch, setIsMatch] = useState(null);

  // Set state with INITIAL match (true / false)
  useEffect(() => {
    const mql = window.matchMedia(mediaQueryString);
    setMediaQueryList(mql);
    setIsMatch(mql.matches);
  }, [mediaQueryString]);

  // Update isMatch state
  // More info on 'change' event: https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/change_event
  useEventListener('change', (e) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}
