// components
import Image from 'next/image';

// styles
import styles from './HeroImage.module.scss';

// Hero image with optional text
const HeroImage = ({ title, src, alt }) => {
  return (
    <div className={styles.container}>
      {title && <h1>{title}</h1>}
      <Image src={src} alt={alt} layout="fill" priority />
    </div>
  );
};

export default HeroImage;
