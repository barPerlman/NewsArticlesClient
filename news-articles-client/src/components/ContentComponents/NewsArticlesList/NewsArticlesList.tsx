import React, {useEffect, useMemo} from "react";
import {NewsArticlesListStyles} from "./NewsArticlesList.styles";
import NewsArticleItem from "../NewsArticleItem/NewsArticleItem";
import {useNewsArticlesContext} from "../../providers/NewsArticlesProvider/NewsArticlesProvider";
import localStorageService from "../../../services/localStorageService";
import {generateUUID} from "../../../services/UUIDService";
//this value is to order the not received author names in the end of the list items
const highValueLexicographicAuthorName = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';

const NewsArticlesList = () => {
    const {articles, setArticles, setRetrievedArticlesCount} = useNewsArticlesContext();

    /**
     * this effect get the articles from local storage browser persistence in case we lost them due to page reload,
     * tab closed or closing application
     */
    useEffect(() => {
        if (articles.length === 0) {
            const storedArticles = localStorageService.getArticlesItems();
            const storedArticlesCount = localStorageService.getArticlesCount();
            if (storedArticles) {
                setArticles(storedArticles);
                setRetrievedArticlesCount(storedArticlesCount);
            }
        }
    }, [articles, setArticles, setRetrievedArticlesCount]);

    /**
     * This memoized function reordering and mapping the articles to jsx only in case they were changed
     */
    const articlesItems = useMemo(() => {
        const sortedArticles = [...articles].sort((article1, article2) => {
            const author1 = article1.author?.toLowerCase() || highValueLexicographicAuthorName;
            const author2 = article2.author?.toLowerCase() || highValueLexicographicAuthorName;
            return author1.localeCompare(author2);
        });

        // here I used the uuid for the key because I didn't get unique identifier from the server
        // url might be related for multiple articles because I can get them more than once
        return sortedArticles.map((article) => (
            <NewsArticleItem key={article.url + '-' + generateUUID()} articleDto={article} />
        ));
    }, [articles]);

    if (articlesItems.length === 0){
        return null;
    }
    return (
        <NewsArticlesListStyles>
            {articlesItems}
        </NewsArticlesListStyles>
    );
}

export default NewsArticlesList;
