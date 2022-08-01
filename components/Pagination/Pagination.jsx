import usePagination, { ELLIPSIS } from '../../hooks/usePagination';

// components
// -- custom
import PaginationItem from '../PaginationItem/PaginationItem';
// -- icons
import Chevron from '../../public/right-chevron.svg';

// styles
import styles from './Pagination.module.scss';

/**
 * @param { number } currentPage - the currently selected/active page.
 * @param { number } totalItemsCount - the total number of data items to paginate.
 * @param { number } itemsPerPage - max number of items per page.
 * @param { function } onPageChange - callback function invoked with updated page value when page changes.
 ---
 * Optional:
 * @param { number } [siblingCount] - the minimum number of pages to display adjacent to currentPage. Defaults to 1.
 * @param { string } [rootClassName] - value of className attribute to be passed to root/top-level container. Overrides default styles.
 * @param { string } [itemClassName] - value of className attribute to be passed to PaginationItems rendered as a button (i.e. not an ellipsis). Overrides default styles.
 */
const Pagination = ({
  currentPage,
  totalItemsCount,
  itemsPerPage,
  onPageChange,
  // optional
  siblingCount,
  // override styles
  rootClassName = styles['pagination'],
  pagesClassName = styles['pagination-items-group'],
  arrowsClassName = styles['pagination-items-group'],
  itemClassName,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalItemsCount,
    itemsPerPage,
    siblingCount,
  });

  // Do not render pagination if less than 2 pages calculated
  if (currentPage === 0 || paginationRange.length < 2) return null;

  // Click handlers - update value of currentPage on button click
  const handlePageClick = (e) => {
    onPageChange(parseInt(e.target.dataset.page));
  };

  const handlePrevClick = () => {
    onPageChange(currentPage - 1);
  };

  const handleNextClick = () => {
    onPageChange(currentPage + 1);
  };

  // Renders numeric values within paginationRange
  const renderPageNumber = (pageNum, additionalProps = {}) => (
    <PaginationItem
      className={itemClassName}
      content={pageNum}
      onClick={handlePageClick}
      active={pageNum === currentPage}
      data-page={pageNum}
      // prevent requests on currentPage click
      disabled={pageNum === currentPage}
      {...additionalProps}
    />
  );

  // Maps over paginationRange and renders PaginationItems appropriately
  const renderPaginationRange = () =>
    paginationRange.map((page, index) => {
      // return PaginationItem styled as ellipsis
      if (page === ELLIPSIS)
        return <PaginationItem key={index} content={page} ellipsis />;

      // return PaginationItem as button containing page number
      return renderPageNumber(page, { key: index });
    });

  // Previous & Next page buttons
  const PrevPageButton = ({ ...additionalProps }) => (
    <PaginationItem
      className={itemClassName}
      content={<Chevron />}
      onClick={handlePrevClick}
      prev
      disabled={currentPage === 1}
      {...additionalProps}
    />
  );

  const NextPageButton = ({ ...additionalProps }) => (
    <PaginationItem
      className={itemClassName}
      content={<Chevron />}
      onClick={handleNextClick}
      next
      disabled={currentPage === lastPage}
      {...additionalProps}
    />
  );

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={rootClassName}>
      {/* Page numbers */}
      <div className={pagesClassName}>{renderPaginationRange()}</div>

      {/* Previous & next buttons, positioned beneath page numbers */}
      <div className={arrowsClassName}>
        <PrevPageButton />
        <NextPageButton />
      </div>
    </div>
  );
};

export default Pagination;
