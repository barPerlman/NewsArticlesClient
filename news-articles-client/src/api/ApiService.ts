import httpClient from "./httpClient";
import {HTTPMethod} from "./types";
import {GetArticleResponse, GetBreakingNewsMetadataResponse} from "../common/types";
import config from './constants/config';

/**
 * The api service is a rest api service which holds the http request functions required to call the backend service
 * api endpoints
 */
const ApiService = {
    getArticle: (limit: number) =>
        httpClient<GetArticleResponse, never>({
            url: `/news`,
            method: HTTPMethod.GET,
            params: {limit}
        }),
    getBreakingNews: () =>
        httpClient<GetBreakingNewsMetadataResponse, never>({
            url: `/breaking-news`,
            method: HTTPMethod.GET,
        }),
    /**
     * This is an implementation of stream reading from a response pipe
     * @param id - id of the article we want to get it's stream content (description+content)
     */
    getBreakingNewsContent: async (id: string) => {
        const { apiUrl } = config;
        const response = await fetch(`${apiUrl}breaking-news/content/${id}`);

        if (!response.ok) {
            throw new Error('Network response failed for streaming');
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder('utf-8');

        let content = '';
        let done, value;

        while (!done && reader) {
            ({ done, value } = await reader.read());
            if (value) {
                content += decoder.decode(value, { stream: true });
            }
        }

        return content;
    }
};

export default ApiService;
