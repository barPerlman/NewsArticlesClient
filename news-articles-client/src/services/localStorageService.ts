import {ArticleDto} from "../common/types";

/**
 * service that expose interface to deal with local storage persistence of the browser
 */

const localStorageService = {
    getArticlesItems: (): ArticleDto[] | null => {
        const data = localStorage.getItem('news-articles');
        return data ? JSON.parse(data) : null;
    },

    getArticlesCount: (): number => {
        const data = localStorage.getItem('news-articles-count');
        return data ? JSON.parse(data) : 0;
    },

    incrementArticlesCount: (): void => {
        const count = localStorageService.getArticlesCount();
        localStorage.setItem('news-articles-count', JSON.stringify(count+1));
    },

    storeArticleItem: (
        value: ArticleDto
    ): void => {
        const articles = localStorageService.getArticlesItems() || [];
        localStorage.setItem('news-articles', JSON.stringify([value, ...articles]));
    },

};

export default localStorageService;
