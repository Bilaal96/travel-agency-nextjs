// components
import Image from 'next/image';

// Swiper
// -- components
import { Swiper, SwiperSlide } from 'swiper/react';
// -- modules
import { Navigation, Pagination, Autoplay } from 'swiper';
// -- styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';

// custom styles
import styles from './ImageSlider.module.scss';

/**
 * @param { Array } slides - array of content for each slide to display
 * @param { number | string } width - width of Image
 * @param { number | string } height - height of Image
 * @param { boolean } withTextOverlay - renders slide content (i.e. text) on top of transparent image overlay (that dims image)
 */
const ImageSlider = ({ slides, width, height, withTextOverlay }) => {
  const swiper = useSwiper();
  useEffect(() => {
    // const s = document.query;
    console.log(swiper);
  }, []);

  return (
    <Swiper
      className={styles['image-slider']}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      speed={800}
      slidesPerView={1}
      loop
      autoplay={{
        delay: 3000,

        // 02/07/2022 - Not currently working as intended
        // autoplay does not resume onMouseLeave - https://github.com/nolimits4web/swiper/discussions/5619
        // pauseOnMouseEnter: true,
      }}
    >
      {slides.map((slide, index) => {
        const { image, content } = slide;

        return (
          <SwiperSlide key={index} className={styles['slide']}>
            {/* Slide image */}
            <Image
              src={image.src}
              alt={image.alt}
              width={width}
              height={height}
              // when priority is undefined, '!!' will coerce to false
              priority={!!image.priority}
            />

            {/* Image overlay with text */}
            {withTextOverlay && (
              <div className={styles['image-overlay']}>
                <div className={styles.content}>
                  <h2 className={styles.heading}>{content.heading}</h2>
                  <p className={styles.details}>{content.details}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
