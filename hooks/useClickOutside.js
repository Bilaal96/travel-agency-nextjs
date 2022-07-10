import { useRef, useEffect } from 'react';

/**
 * Listens for click events occurring outside of the element to which domNodeRef is passed. On "click outside" of the referenced element, the handleClickOutside callback is executed.
 * NOTE: if an element has the className '.click-outside-exception', on click it will not execute the handleClickOutside callback
 
 * @param { Function } handleClickOutside - function to execute when user clicks outside of domNodeRef
 * @param { String } [classNamePrefix] - a className prefix used to (more precisely) control when exceptions apply for a single instance/call of useClickOutside. Tip: for clarity, use a name that refers to the element to which domNodeRef is passed.
 
 * @return { React.MutableRefObject } domNodeRef - handleClickOutside is executed on the element to which domNodeRef is passed as a ref prop 
 */
export default function useClickOutside(
  handleClickOutside,
  classNamePrefix = ''
) {
  // Create className that will exclude an element from click detection
  const classNameSuffix = 'click-outside-exception';
  const exceptionClassName = classNamePrefix.length
    ? `${classNamePrefix}-${classNameSuffix}`
    : classNameSuffix;

  // To be passed to element that will listen for outside clicks
  const domNodeRef = useRef();

  useEffect(() => {
    // Event handler
    const handleMouseDown = (e) => {
      // ignore elements with className of exceptionClassName
      if (e.target.classList.contains(exceptionClassName)) return;

      // e.target DOES NOT MATCH domNodeRef
      if (domNodeRef.current && !domNodeRef.current.contains(e.target)) {
        handleClickOutside();
      }
    };

    // register event listener
    document.addEventListener('mousedown', handleMouseDown, true);

    // cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleMouseDown, true);
    };
  }, []);

  return domNodeRef;
}
