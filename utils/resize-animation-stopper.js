/**
 * Prevents janky CSS animations on window resize
 * To be called in useEffect hook
 * @returns event cleanup function, which should be invoked by useEffect on component unmount
 */
export function resizeAnimationStopper() {
  let resizeTimer;

  const handleBodyStylesOnResize = () => {
    // Add class to body tag, styled to prevent transitions and animations
    document.body.classList.add('resize-animation-stopper');

    // Reset timer - i.e. clear previous timer
    clearTimeout(resizeTimer);

    // Remove class from body tag after specified timeout
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  };

  window.addEventListener('resize', handleBodyStylesOnResize);

  return () => window.removeEventListener('resize', handleBodyStylesOnResize);
}
