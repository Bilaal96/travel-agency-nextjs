// components
import Link from 'next/link';

// styles
import styles from './ArticlePreview.module.scss';

const ArticlePreview = ({ title, description, slug }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a className={styles['article-preview-card']}>
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </Link>
  );
};

export default ArticlePreview;
