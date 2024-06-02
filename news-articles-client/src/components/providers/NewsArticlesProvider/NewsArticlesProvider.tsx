import React, {PropsWithChildren, useContext, useState} from "react";
import {ArticleDto} from "../../../common/types";
import localStorageService from "../../../services/localStorageService";

/**
 *  creating provider for news article state
 *  and its reusable context
 */

interface NewsArticlesSetters {
    setRetrievedArticlesCount: React.Dispatch<React.SetStateAction<number>>;
    setArticles: React.Dispatch<React.SetStateAction<ArticleDto[]>>;
    addArticle: (articleDto: ArticleDto) => void;
    setIsLoadingArticle: React.Dispatch<React.SetStateAction<boolean>>
    setIsErrorArticle: React.Dispatch<React.SetStateAction<boolean>>
}

interface NewsArticlesVariables {
    retrievedArticlesCount: number;
    articles: ArticleDto[];
    isLoadingArticle: boolean
    isErrorArticle: boolean
}

interface NewsArticlesContextInterface extends NewsArticlesSetters, NewsArticlesVariables {}

const NewsArticlesContext = React.createContext<NewsArticlesContextInterface>({} as NewsArticlesContextInterface);

export const useNewsArticlesContext = () => useContext(NewsArticlesContext);

const NewsArticlesProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [retrievedArticlesCount, setRetrievedArticlesCount] = useState<number>(0);
    const [articles, setArticles] = useState<ArticleDto[]>([]);
    const [isLoadingArticle, setIsLoadingArticle] = useState<boolean>(false);
    const [isErrorArticle, setIsErrorArticle] = useState<boolean>(false);


    const addArticle = (articleDto: ArticleDto) => {
        setRetrievedArticlesCount((prevState)=> prevState+1);
        setArticles(prevState => [articleDto,...prevState]);
        localStorageService.storeArticleItem(articleDto);
        localStorageService.incrementArticlesCount();
    }

    return (
        <NewsArticlesContext.Provider value={{
            retrievedArticlesCount,
            setRetrievedArticlesCount,
            articles,
            setArticles,
            addArticle,
            isLoadingArticle,
            setIsLoadingArticle,
            isErrorArticle,
            setIsErrorArticle
        }}>
            {children}
        </NewsArticlesContext.Provider>
    );
}

export default NewsArticlesProvider;
