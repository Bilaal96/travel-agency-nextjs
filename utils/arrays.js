/**
 * Creates array with 1st value equal to 'start', and with subsequent values incrementing from 'start' upto and including 'end'.
 * @param { number } start - 1st value of array range
 * @param { number } end - last value of array range
 */
export const range = (start, end) => {
  let length = end - start + 1; // +1 makes range inclusive of 'end'
  return Array.from({ length }, (_, index) => start + index);
};
