// utils
import { range } from '../../utils/arrays';

// styles
import styles from './Spinner.module.scss';

/**
 * A loading icon that animates a row of (up to 5) balls.
 * BouncingSpinner is returned by Spinner component if it receives 'bounce' prop.
 * The value of Spinner's 'bounce' prop is assigned to BouncingSpinner's 'ballCount' prop.
 * @param { boolean | number } ballCount - determines the numOfBalls to render in the spinner. If boolean, uses default value.
 */
const BouncingSpinner = ({ ballCount }) => {
  // Defaults to 4 if ballCount is not a number
  const numOfBalls = typeof ballCount !== 'number' ? 4 : ballCount;

  return (
    <div className={styles.bouncer}>
      {range(1, numOfBalls).map((ballNumber) => (
        <div key={ballNumber} className={styles.ball}></div>
      ))}
    </div>
  );
};

/**
 * A rotating circular loading icon. The default value returned by Spinner.
 */
const RotatingSpinner = () => (
  <div className={styles.spinner}>
    <div className={styles['curved-edge']}></div>
    <div className={styles['curved-edge']}></div>
  </div>
);

/**
 * Animated loading icon
 * @param { boolean | number } bounce - if received, Spinner renders BouncingSpinner, otherwise it defaults to RotatingSpinner.
 * @param { Object } containerStyles - styles object applied to the container of Spinner component
 */
const Spinner = ({ bounce, containerStyles = null }) => {
  // Render RotatingSpinner as default
  // Render BouncingSpinner if 'bounce' prop received
  const spinner = bounce ? (
    <BouncingSpinner ballCount={bounce} />
  ) : (
    <RotatingSpinner />
  );

  // Render with container that centers spinner
  if (containerStyles !== null) {
    return (
      <div className={styles['spinner-container']} style={containerStyles}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default Spinner;
