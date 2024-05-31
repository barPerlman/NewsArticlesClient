import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";
import {useNewsArticlesContext} from "../../components/providers/NewsArticlesProvider/NewsArticlesProvider";

const useGetArticle = () => {

    const {addArticle} = useNewsArticlesContext();

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.Article],
        () => ApiService.getArticle(1),
        {
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (data) => {
                addArticle(data.articles[0]);
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
