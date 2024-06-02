import {ArticlesRetrievedStatusStyles, ArticlesRetrievedStatusLabelStyles} from "./ArticlesRetrievedStatus.styles";
import {useNewsArticlesContext} from "../providers/NewsArticlesProvider/NewsArticlesProvider";
import {HeaderLabels} from '../../common/constants/labels';

/**
 * This component is the ui piece displays the amount of articles retrieved so far
 */
const ArticlesRetrievedStatus = () => {

    const {retrievedArticlesCount} = useNewsArticlesContext();

    return (
       <ArticlesRetrievedStatusStyles>
            <ArticlesRetrievedStatusLabelStyles>{HeaderLabels.ArticlesRetrieved}: {retrievedArticlesCount}</ArticlesRetrievedStatusLabelStyles>
       </ArticlesRetrievedStatusStyles>
    );
}
export default ArticlesRetrievedStatus
