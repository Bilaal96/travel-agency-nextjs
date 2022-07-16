// components
import ArticlePreview from '../ArticlePreview/ArticlePreview';

// styles
import styles from './ArticlePreviewList.module.scss';

// Maps over articles props and renders a list of ArticlePreview components for each article
const ArticlePreviewList = ({ articles }) => {
  return (
    <div className={styles['article-preview-list']}>
      {articles.map((article) => {
        const { title, description, slug } = article.attributes;

        return (
          <ArticlePreview
            key={article.id}
            title={title}
            description={description}
            slug={slug}
          />
        );
      })}
    </div>
  );
};

export default ArticlePreviewList;
