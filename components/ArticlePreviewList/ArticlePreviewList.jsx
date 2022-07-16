// components
import ArticlePreview from '../ArticlePreview/ArticlePreview';

const ArticlePreviewList = ({ articles }) => {
  return articles.map((article) => {
    const { title, description, slug } = article.attributes;

    return (
      <ArticlePreview
        key={article.id}
        title={title}
        description={description}
        slug={slug}
      />
    );
  });
};

export default ArticlePreviewList;
