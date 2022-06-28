import { parseISO, format } from 'date-fns';

const SeoDate = ({ dateString, ...rest }) => {
  // Convert dateString to object
  const date = parseISO(dateString);
  // Format date object as human-readable string
  const formattedDate = format(date, 'do LLLL y');

  return (
    <time dateTime={dateString} {...rest}>
      {formattedDate}
    </time>
  );
};

export default SeoDate;
