import { useRef, useEffect } from 'react';

export default function useEventListener(eventType, callback, element) {
  // If window object exists in current environment, set 'element' to default value of window
  const isClientSide = typeof window !== 'undefined';
  const elementDoesNotExist =
    typeof element === 'undefined' || element === null;
  if (isClientSide && elementDoesNotExist) element = window;

  // Save callback between renders
  const callbackRef = useRef(callback);

  // If callback changes, update callbackRef
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Handle attaching & removing event listeners to 'element'
  useEffect(() => {
    // event handler - forwards event object to callbackRef
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    // Cleanup event listener on unmount
    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
