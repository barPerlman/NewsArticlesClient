import httpClient from "./httpClient";

import {HTTPMethod} from "./types";

import {GetArticleResponse} from "../common/types";

const ApiService = {
    getArticle: (limit: number) =>
        httpClient<GetArticleResponse, never>({
            url: `/news?limit=${limit}`,
            method: HTTPMethod.GET,
        }),
};

export default ApiService;
