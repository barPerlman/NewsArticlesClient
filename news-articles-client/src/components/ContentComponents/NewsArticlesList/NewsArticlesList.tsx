import React, {useMemo} from "react";
import {NewsArticlesListStyles} from "./NewsArticlesList.styles";
import NewsArticleItem from "../NewsArticleItem/NewsArticleItem";
import {useNewsArticlesContext} from "../../providers/NewsArticlesProvider/NewsArticlesProvider";
import localStorageService from "../../../services/localStorageService";
import {generateUUID} from "../../../services/UUIDService";

const NewsArticlesList = () => {



    const {articles, setArticles, setRetrievedArticlesCount} = useNewsArticlesContext();

    const articlesItems = useMemo(() => {
        const highValueLexicographicAuthorName = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
        const sortedArticles = [...articles].sort((article1, article2) => {
            const author1 = article1.author?.toLowerCase() || highValueLexicographicAuthorName;
            const author2 = article2.author?.toLowerCase() || highValueLexicographicAuthorName;
            if (author1 < author2) {
                return -1;
            } else if (author1 > author2) {
                return 1;
            }
            return 0;
        });

        return sortedArticles.map((article) => (
            <NewsArticleItem key={article.url + ' ' + generateUUID()} articleDto={article} />
        ));
    }, [articles]);

    const storedArticles = localStorageService.getArticlesItems();
    const storedArticlesCount = localStorageService.getArticlesCount();

    if (articlesItems.length > 0){
        return (
            <NewsArticlesListStyles>
                {articlesItems}
            </NewsArticlesListStyles>
        );
    } else if (storedArticles) {
        setArticles(storedArticles);
        setRetrievedArticlesCount(storedArticlesCount);
    }
    return null;


}

export default NewsArticlesList;
