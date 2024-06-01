import httpClient from "./httpClient";

import {HTTPMethod} from "./types";

import {GetArticleResponse, GetBreakingNewsMetadataResponse} from "../common/types";

const ApiService = {
    getArticle: (limit: number) =>
        httpClient<GetArticleResponse, never>({
            url: `/news?limit=${limit}`,
            method: HTTPMethod.GET,
        }),
    getBreakingNews: () =>
        httpClient<GetBreakingNewsMetadataResponse, never>({
            url: `/breaking-news`,
            method: HTTPMethod.GET,
        }),
    getBreakingNewsContent: async (id: string) => {
        const response = await fetch(`http://localhost:8000/api/breaking-news/content/${id}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
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
