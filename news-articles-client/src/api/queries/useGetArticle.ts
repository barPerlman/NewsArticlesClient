import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";
import {useNewsArticlesContext} from "../../components/providers/NewsArticlesProvider/NewsArticlesProvider";

/**
 * Custom hook used to get news article from the server and maintaining its state in client using react query
 * This hook expose the retrieved data, and request states (error, loading) for ux and error handling purposes
 */
const useGetArticle = () => {

    const {addArticle, setIsLoadingArticle, setIsErrorArticle} = useNewsArticlesContext();

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.Article],
        () => {
            setIsLoadingArticle(true);
            return ApiService.getArticle(1);
        },
        {
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (data) => {
                addArticle(data.articles[0]);
                setIsLoadingArticle(false);
                setIsErrorArticle(false);
            },
            onError: () => {
                setIsLoadingArticle(false);
                setIsErrorArticle(true);
            }
        }
    );

    return {
        article: data?.articles[0] || null,
        articleLoading: isLoading,
        articleError: error,
        getArticle: refetch
    };
};

export default useGetArticle;
