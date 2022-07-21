/**
 * Utility function that generates a string of classNames given an object in the following format: 
    - { [className]: boolean indicating whether to apply className }

 * The function can be used to apply styles with or without CSS modules
 */

// ----- Mapping functions for cnEntries -----
/**
 * Mapping function that returns the valid classNames for a CSS Module  
 
 * @param { [string, boolean] } entry - a tuple consisting of [key, value] representing the key-value pair of an object property.
 * @param { Object } styles - an object used to apply styles when using CSS modules.
 */
//
const getClassNamesFromCssModule = ([key, value], styles) => {
  // Apply root className if defined
  if ((key === 'root') & (value !== undefined)) return styles[value];

  // Apply conditional classNames that evaluated to true
  return styles[key];
};

/** 
 * Mapping function that returns the valid classNames for basic css string classes (i.e. non-CSS-Module )
  
 * @param { [string, boolean] } entry - a tuple consisting of [key, value] representing the key-value pair of an object property.
 */
const getClassNames = ([key, value]) => {
  // Apply root className if defined
  if ((key === 'root') & (value !== undefined)) return value;
  // Apply conditional classNames that evaluated to true
  return key;
};

/**
 * A function that generates a string of css classes from an object (cn) to be passed as the value of a React elements "className" attribute
 
 * @param { Object } cn
 * The property KEYS of cn represent the css class name.
 * The property VALUES should evaluate to a boolean.
    - if true, the css class IS applied
    - if false, the css class is NOT applied
 * @param { Object } [styles=null] - an object used to apply styles when using CSS modules.

  @returns { String } to be passed as the value of a React elements "className" attribute.
 * ---
 * Room for improvement:
    - Add ability to use global css class
    - e.g. add global property to 'cn' and conduct checks for cn.global in classNames() 
 */
const classNames = (cn, styles = null) => {
  // Prevent mutation of cn by creating shallow clone
  const cnClone = { ...cn };
  // If styles is an object, classNames was called on cssModule
  const isCssModule = styles !== null;

  // Get array of property key-value pairs (i.e. entries) from cnClone
  // Remove an entry if value is falsy
  const cnEntries = Object.entries(cnClone).filter(([key, value]) => !!value);

  // Generate an array of valid classNames by mapping over cnEntries
  const cnArray = isCssModule
    ? cnEntries.map((entry) => getClassNamesFromCssModule(entry, styles))
    : cnEntries.map(getClassNames);

  // return space-separated string of classNames
  return cnArray.join(' ');
};

export default classNames;
