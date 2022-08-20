/** 
 * ----- Things to keep in mind: -----
 * Must return range of numbers to be displayed in our Pagination component as an Array
 * Computation logic needs to re-run when either currentPage, pageSize, siblingCount or totalCount changes
 * Total number of items returned by the hook should remain constant. This will avoid resizing our pagination component if the length of the range array changes while the user is interacting with the component.
 
 * ----- 4 Possible States of Pagination Component ----- 
 * totalPageCount - total number of pages 
 * maxPagesWithoutEllipsis - max no. of PaginationItems to show before adding ellipsis
 
 * (1) totalPageCount < maxPagesWithoutEllipsis -> return range [1, totalPageCount]
 * (2) totalPageCount > maxPagesWithoutEllipsis, with ONLY Right Ellipsis visible
 * (3) totalPageCount > maxPagesWithoutEllipsis, with ONLY LEFT Ellipsis visible
 * (4) totalPageCount > maxPagesWithoutEllipsis, with BOTH LEFT & RIGHT Ellipsis visible
 */
import { useMemo } from 'react';

// utils
import { range } from '../utils/arrays';

// constants
export const ELLIPSIS = '...';

const usePagination = ({
  currentPage,
  totalItemsCount,
  itemsPerPage,
  siblingCount = 1,
}) => {
  // Generate pagination array
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalItemsCount / itemsPerPage);

    /** 
     * maxPagesWithoutEllipsis = The sum of:
      - siblingCount (1 - default)
      - 5 = firstPage (1), currentPage (1), lastPage (1), Ellipsis (2)
     */
    const maxPagesWithoutEllipsis = siblingCount + 5;

    // State (1) - render [1, totalPageCount]
    if (totalPageCount <= maxPagesWithoutEllipsis) {
      return range(1, totalPageCount);
    }

    // Calculate left and right sibling values and make sure they are within range: [1, totalPageCount]
    const leftSibling = Math.max(
      currentPage - siblingCount,
      1 // min value
    );
    const rightSibling = Math.min(
      currentPage + siblingCount,
      totalPageCount // max value
    );

    /** 
     * --- Determining when to insert ellipsis ---
     * If the number of pages between (extremes of) a sibling and the start/end value of a range is equal to 1, DO NOT show Ellipsis
     
     * e.g. DO NOT SHOW ELLIPSIS
     * left side: [ 1, 2, [sibling=3], [current=4], (etc.) ]
     * right side:  [ (etc.), [current=4], [sibling=5], 6, 7 ]
     
     * e.g. SHOW ELLIPSIS
     * left side: [ 1, "...", [sibling=4], [current=5], (etc.) ]
     * right side: [ (etc.), [current=3], [sibling=4], "...", 7 ]
     */
    // Show left ellipsis if leftSibling is greater than 2nd page
    const showLeftEllipsis = leftSibling > 2;
    // Show right ellipsis if rightSibling is less than 2nd-to-last page
    const showRightEllipsis = rightSibling < totalPageCount - 1;

    // Set values required to calculate no. of items in range on the right/left side
    /**
     * @const { number } totalSiblingsCount - number of sibling elements (of currentPage) in range */
    const totalSiblingsCount = 2 * siblingCount;
    /**
     * @const { number } totalNonSiblingsCount - number of non-siblings elements in range

     * Value of 3 calculated from non-sibling elements in:
     1. State (2) Left range: firstPage + secondPage + currentPage
     2. State (3) Right range: currentPage + secondToLastPage + lastPage */
    const totalNonSiblingsCount = 3;

    // State (2) - show ellipsis on RIGHT side only
    if (!showLeftEllipsis && showRightEllipsis) {
      // calculate number of pages in range BEFORE ellipsis
      const leftItemsCount = totalSiblingsCount + totalNonSiblingsCount;
      const leftRange = range(1, leftItemsCount);
      return [...leftRange, ELLIPSIS, totalPageCount];
    }

    // State (3) - show ellipsis on LEFT side only
    if (showLeftEllipsis && !showRightEllipsis) {
      // calculate number of pages in range AFTER ellipsis
      const rightItemsCount = totalSiblingsCount + totalNonSiblingsCount;
      const rightRange = range(
        totalPageCount - rightItemsCount + 1,
        totalPageCount
      );
      return [1, ELLIPSIS, ...rightRange];
    }

    // State (4) - show ellipsis on both LEFT & RIGHT sides
    if (showLeftEllipsis && showRightEllipsis) {
      const middleRange = range(leftSibling, rightSibling);
      return [1, ELLIPSIS, ...middleRange, ELLIPSIS, totalPageCount];
    }
  }, [currentPage, totalItemsCount, itemsPerPage, siblingCount]);

  return paginationRange;
};

export default usePagination;
