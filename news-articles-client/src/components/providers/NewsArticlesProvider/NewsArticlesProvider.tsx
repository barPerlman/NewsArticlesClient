import React, {PropsWithChildren, useContext, useState} from "react";


interface NewsArticlesSetters {
    setRetrievedArticlesCount: React.Dispatch<React.SetStateAction<number>>;
}

interface NewsArticlesVariables {
    retrievedArticlesCount: number;

}

interface NewsArticlesContextInterface extends NewsArticlesSetters, NewsArticlesVariables {}

const NewsArticlesContext = React.createContext<NewsArticlesContextInterface>({} as NewsArticlesContextInterface);

export const useNewsArticlesContext = () => useContext(NewsArticlesContext);

const NewsArticlesProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {

    const [retrievedArticlesCount, setRetrievedArticlesCount] = useState<number>(0);

    return (
        <NewsArticlesContext.Provider value={{
            retrievedArticlesCount,
            setRetrievedArticlesCount
        }}>
            {children}
        </NewsArticlesContext.Provider>
    );
}

export default NewsArticlesProvider;
