import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";
import {useBreakingNewsContext} from "../../components/providers/BreakingNewsProvider/BreakingNewsProvider";

/**
 * Custom hook used to get breaking news article metadata from the server and maintaining its state in client using react query
 * This hook expose the retrieved data, and request states (error, loading) for ux and error handling purposes
 * article metadata includes the same format as of the article format but without the description and content which received separately as stream
 */
const useGetBreakingNews = () => {

    const {setBreakingNewsArticleMetadata, setIsLoadingContent} = useBreakingNewsContext();

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.BreakingNews],
        () => {
            setIsLoadingContent(true); // start request to get content of breaking news so loading state is true
            return ApiService.getBreakingNews()
        },
        {
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (data) => {
                const articleMetadata = data.articles[0];
                setBreakingNewsArticleMetadata(articleMetadata);
                setIsLoadingContent(false); // got success response so not  in loading state anymore
            },
            onError: () => {
                // after 4 failed requests got an error and set loading flag back to false
                setIsLoadingContent(false);
            }
        }
    );

    return {
        breakingNews: data?.articles[0] || null,
        breakingNewsLoading: isLoading,
        breakingNewsError: error,
        getBreakingNews: refetch
    };
};

export default useGetBreakingNews;
