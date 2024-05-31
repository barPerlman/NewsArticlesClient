import {ArticlesRetrievedStatusStyles, ArticlesRetrievedStatusLabelStyles} from "./ArticlesRetrievedStatus.styles";
import {useNewsArticlesContext} from "../providers/NewsArticlesProvider/NewsArticlesProvider";

const ArticlesRetrievedStatus = () => {

    const {retrievedArticlesCount} = useNewsArticlesContext();

    return (
       <ArticlesRetrievedStatusStyles>
            <ArticlesRetrievedStatusLabelStyles>Articles Retrieved: {retrievedArticlesCount}</ArticlesRetrievedStatusLabelStyles>
       </ArticlesRetrievedStatusStyles>
    );
}
export default ArticlesRetrievedStatus
