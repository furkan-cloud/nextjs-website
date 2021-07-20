import ArticleItem from "./ArticleItem";
import classes from "./ArticleList.module.css";

const ArticleList = (props) => {
    return (
<ul>
    {props.articles.map((article) => (
        <ArticleItem key={article.id}
        id={article.id}
        image={article.image}
        title={article.title}
        description={article.description} />
    ))}
</ul>
    )
}

export default ArticleList
