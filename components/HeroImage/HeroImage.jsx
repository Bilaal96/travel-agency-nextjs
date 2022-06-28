// styles
import styles from './HeroImage.module.scss';

// Hero background image with optional text
const HeroImage = ({ imageUrl, title }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {title && <h1>{title}</h1>}
    </div>
  );
};

export default HeroImage;
