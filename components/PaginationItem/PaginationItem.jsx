// utils
import classNames from '../../utils/css-class-names';

// styles
import styles from './PaginationItem.module.scss';

const PaginationItem = ({
  onClick: handleClick,
  content,
  active,
  prev,
  next,
  ellipsis,
  hide,
  className,
  ...otherProps
}) => {
  // className definitions
  const cn = {
    root: 'pagination-item', // root is always applied
    'prev-btn': prev,
    'next-btn': next,
    active,
    hide,
    ellipsis,
  };

  // render ellipsis in div
  const Item = ellipsis ? 'div' : 'button';

  return (
    <Item
      className={className ? className : classNames(cn, styles)}
      onClick={handleClick}
      {...otherProps}
    >
      {content}
    </Item>
  );
};

export default PaginationItem;
