// components
import Image from 'next/image';

// styles
import styles from './HolidayPackageCard.module.scss';

const HolidayPackageCard = ({ packageInfo }) => {
  // Destructure card data from packageInfo
  const { thumbnail, location, numOfNights, inclusive, amenities, price } =
    packageInfo.attributes;
  const thumbnailUrl = thumbnail.data.attributes.url;
  const thumbnailAlt = thumbnail.data.attributes.alternativeText;

  const renderListItems = (array) =>
    array.map((item, index) => <li key={index}>{item}</li>);

  return (
    <div className={styles.card}>
      <div className={styles['thumbnail-container']}>
        <Image
          className={styles.thumbnail}
          src={thumbnailUrl}
          alt={thumbnailAlt}
          layout="fill"
          priority
        />
      </div>

      <div className={styles.header}>
        <h3 className={styles.location}>{location}</h3>
        <h4 className={styles.nights}>{numOfNights.toString()} Nights</h4>
      </div>

      <div className={styles.inclusive}>
        <p>
          <strong>Package includes:</strong>
        </p>
        <ul>{renderListItems(inclusive.list)}</ul>
      </div>
      <hr />

      <div className={styles.amenities}>
        <h4>Amenities</h4>
        <ul>{renderListItems(amenities.list)}</ul>
      </div>

      <div className={styles.footer}>
        <p className={styles.price}>
          <span>£{price.toString()}</span> per person
        </p>
        <button className={styles.button} type="button">
          Details
        </button>
      </div>
    </div>
  );
};

export default HolidayPackageCard;
