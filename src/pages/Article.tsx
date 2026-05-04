import { useParams } from "react-router-dom";
import { articlesMap } from "../data/articles";

const Article = () => {
  const { title } = useParams();

  const article = title ? articlesMap[title] : null;
  const Component = article?.component;

  if (!Component) return <p>article not found ;(</p>;

  return <Component />;
};

export default Article;
