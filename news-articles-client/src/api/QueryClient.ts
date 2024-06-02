import HttpError from './HttpError';
import ApiService from './ApiService';
import { QueryClient } from 'react-query';

/**
 * Defining the retry mechanism to add to the failed query client fetch requests
 * @param failureCount - times that the request sent after the first failure
 * @param error - the error returned in the response
 */
const retry = (failureCount: number, error: unknown) => {
    const { status, requestedApi } = error as HttpError;

    if (status !== 200 && requestedApi && requestedApi.includes("api/news")) {
        ApiService.getArticle(1)
            .then(() => {
                queryClient.refetchQueries({ active: true });
            })
            .catch((e) => {
                console.warn('Failed to get news article: ', e.message);
            });
    } else if (status !== 200 && requestedApi && requestedApi.includes("api/breaking-news")){
        ApiService.getBreakingNews()
            .then(() => {
                queryClient.refetchQueries({active: true});
            })
            .catch((e) => {
                console.warn('Failed to get breaking news metadata: ', e.message);
            });
    } else if (status !== 200 && requestedApi && requestedApi.includes("api/breaking-news/content")){
        const articleId = requestedApi.split('/').pop();
        if (articleId){
            ApiService.getBreakingNewsContent(articleId)
                .then(() => {
                    queryClient.refetchQueries({active: true});
                })
                .catch((e) => {
                    console.warn('Failed to get breaking news content: ', e.message);
                });
        } else {
            console.warn('Failed to parse article id from request url');
        }
    }

    if (failureCount === 3 ) {
        console.warn('failed to retry request 3 times');
        return false;
    }

    return true;
};

/**
 * configuring of the refetch mechanism for the react query client
 */
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchInterval: false,
            refetchIntervalInBackground: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            refetchOnMount: true,
            retry,
        },
        // actually, the mutations configurations is relevant only if I had mutations queries that I defined.
        // but I didn't because all the requests in this app are GET requests
        mutations: {
            retry,
        },
    },
});

export default queryClient;
