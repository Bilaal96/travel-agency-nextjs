// styles
import styles from './DecoratedHeading.module.scss';

/**
 * Renders a html heading element with styled pseudo-elements  
 
 * @param { string | number } level - html heading level from 1 to 6
 * @param { string } text - heading text
 */
const DecoratedHeading = ({ level, text, ...otherProps }) => {
  // Heading element
  const Heading = 'h' + level;

  return (
    <Heading className={styles[`${Heading}`]} {...otherProps}>
      {text}
    </Heading>
  );
};

export default DecoratedHeading;
