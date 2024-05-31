import HttpError from './HttpError';
import ApiService from './ApiService';
import { QueryClient } from 'react-query';

const retry = (failureCount: number, error: unknown) => {
    const { status, requestedApi } = error as HttpError;

    if (status !== 200 && requestedApi && requestedApi.includes("api/news")) {
        ApiService.getArticle(1)
            .then(() => {
                queryClient.refetchQueries({ active: true });
            })
            .catch((e) => {
                console.warn('Failed to get: ', e.message);
            });
    } else if (status !== 200 && requestedApi && requestedApi.includes("api/breaking-news")){
        //TODO:
        //ApiService.getBreakingNews...
    }

    if (failureCount === 3 ) {
        console.warn('failed to retry request 3 times');
        return false;
    }

    return true;
};

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
        mutations: {
            retry,
        },
    },
});

export default queryClient;
