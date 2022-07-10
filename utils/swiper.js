/**
 * Handles when the .swiper-no-swiping class is added | removed | toggled from any Swiper components rendered.
 * NOTE: .swiper-no-swiping is a className defined by the Swiper JS library
 
 * @param { "add" | "remove" | "toggle" } classListMethod - the string name of a method used to manipulate the .swiper-no-swiping class

 * __Use Case:__

 * When trying to detect clicks outside of the mobile NavMenu, the Swiper component's touch/drag (i.e. swiping) capability prevents the registering of clicks. As a result the menu does not close.
 * In NavRoot component, when toggling or closing the mobile NavMenu, handleSwiperNoSwiping is used to toggle or remove (respectively) the .swiper-no-swiping className.
 * This temporarily disables the swiping capability whilst the mobile NavMenu is open, thus enabling the ability to register the outside click.
 */
export const handleSwiperNoSwiping = (classListMethod) => {
  const swipers = document.querySelectorAll('.swiper');
  swipers.forEach((swiper) =>
    swiper.classList[classListMethod]('swiper-no-swiping')
  );
};
