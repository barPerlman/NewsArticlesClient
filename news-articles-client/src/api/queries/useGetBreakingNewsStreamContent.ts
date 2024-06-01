import { useQuery } from 'react-query';
import ApiService from '../ApiService';
import { QueryKeys} from "../constants/queryKeys";
import {useBreakingNewsContext} from "../../components/providers/BreakingNewsProvider/BreakingNewsProvider";

const useGetBreakingNewsStreamContent = (id: string) => {

    const {setBreakingNewsContent} = useBreakingNewsContext();

    const { data, isLoading, error, refetch } = useQuery(
        [QueryKeys.BreakingNewsContent],
        () => ApiService.getBreakingNewsContent(id),
        {
            refetchOnWindowFocus: false,
            enabled: !!id,
            onSuccess: (data)=> {
                setBreakingNewsContent(data)
            },
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
