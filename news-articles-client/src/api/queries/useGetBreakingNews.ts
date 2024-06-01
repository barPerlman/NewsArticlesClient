import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";
import {useBreakingNewsContext} from "../../components/providers/BreakingNewsProvider/BreakingNewsProvider";

const useGetBreakingNews = () => {

    const {setBreakingNewsArticleMetadata} = useBreakingNewsContext();

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.BreakingNews],
        () => ApiService.getBreakingNews(),
        {
            refetchOnWindowFocus: false,
            enabled: false,
            onSuccess: (data) => {
                const articleMetadata = data.articles[0];
                setBreakingNewsArticleMetadata(articleMetadata);
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
