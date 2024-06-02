import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";

/**
 * Custom hook used to get breaking news article description+content as stream from the server and maintaining its state
 * in client using react query.
 * This hook expose the retrieved data, and request states (error, loading) for ux and error handling purposes.
 */
const useGetBreakingNewsStreamContent = (id: string) => {

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.BreakingNewsContent],
        () => ApiService.getBreakingNewsContent(id),
        {
            refetchOnWindowFocus: false,
            enabled: !!id,
        }
    );

    return {
        breakingNewsStreamContent: data,
        breakingNewsContentLoading: isLoading,
        breakingNewsContentError: error,
        getBreakingNewsContent: refetch
    };
};

export default useGetBreakingNewsStreamContent;
