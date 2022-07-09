// components
import Image from 'next/image';
// -- custom
import DecoratedHeading from '../DecoratedHeading/DecoratedHeading';

// styles
import styles from './ImageReel.module.scss';

/**
 * An image display that infinitely scrolls (horizontally)
 
 * NOTE:
 * The infinite scroll animation is an illusion in which we must ensure the following:
 * (1) two copies of the same "image-group" are rendered horizontally, side-by-side. They're contained by an "image-reel".
 * (2) the "image-reel" is animated to move to the left. 
    - It can be thought of as a track along which an "image-group" moves.
    - Each cycle of the animation starts and ends with: the first image of an "image-group" on the left-most side.
    - i.e. the second "image-group" ends in the same position that the first "image-group" starts
 * (3) the overflow of "image-reel-container" is hidden
 
 *! Caveats of this method:
  - "image-reel-container" must have a fixed width === the sum of all image widths (i.e. all image widths must be known to calculate container width)

 * Additional NOTE:
  - to house 2 "image-group(s)", the "image-reel" must be double the width of its container
  - to ensure that the animation is seamless (i.e. it starts/ends in the right place) the flex gap between each "image-group" must be subtracted from the width
  - i.e. width: calc(200% - $image-gap)
 */

// Group of images rendered inside an ImageReel
const ImageGroup = ({ images }) => (
  <div className={styles['image-group']}>
    {images.map((image, index) => (
      <Image
        key={index}
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
      />
    ))}
  </div>
);

// Animated reel of images - infinitely scrolls to left
const ImageReel = ({ title, images }) => {
  /**
   * A function that renders a number of ImageGroup components. The exact number of groups rendered depends on the value of numOfGroups argument.
   
   * @param {Number} numOfGroups - number of ImageGroup components to render. Defaults to 1.
   * @return {Array} array of ImageGroup(s) to render
   */
  const renderImageGroups = (numOfGroups = 1) => {
    return Array.from({ length: numOfGroups }).map((_, index) => (
      <ImageGroup key={index} images={images} />
    ));
  };

  return (
    <div className={styles['root-container']}>
      {title && <DecoratedHeading level="2" text={title} />}

      <div className={styles['image-reel-container']}>
        <div className={styles['image-reel']}>{renderImageGroups(2)}</div>
      </div>
    </div>
  );
};

export default ImageReel;
