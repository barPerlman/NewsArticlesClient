/**
 * The following are the Entities in the system and their response types
 */

export interface ArticleDto {
    source: {
        id: string | null;
        name: string;
    }
    author: string;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string | null;
    content: string | null;
}

export interface GetArticleResponse {
    status: string;
    totalResults: number;
    articles: ArticleDto[]
}

export interface BreakingNewsMetadataDto {
    id: string;
    source: {
        id: string | null;
        name: string;
    }
    author: string;
    title: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string | null;
}


export interface GetBreakingNewsMetadataResponse {
    status: string;
    totalResults: number;
    articles: BreakingNewsMetadataDto[]
}

