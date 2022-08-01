/**
 * An event handler that prevents janky CSS animations. To be called on window 'resize' event.
 * @param { Event } e - event object received from listener
 */
export default function resizeAnimationStopper(e) {
  // Add class to body tag, styled to prevent transitions and animations
  document.body.classList.add('resize-animation-stopper');

  // Remove class from body tag after specified timeout (in ms)
  setTimeout(() => {
    document.body.classList.remove('resize-animation-stopper');
  }, 400);
}
