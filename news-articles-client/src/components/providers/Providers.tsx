import React, {PropsWithChildren} from "react";
import NewsArticlesProvider from "./NewsArticlesProvider/NewsArticlesProvider";
import {QueryClientProvider} from "react-query";
import queryClient from "../../api/QueryClient";
import BreakingNewsProvider from "./BreakingNewsProvider/BreakingNewsProvider";

const Providers: React.FC<PropsWithChildren<{}>> = ({children}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <BreakingNewsProvider>
                <NewsArticlesProvider>{children}</NewsArticlesProvider>
            </BreakingNewsProvider>
        </QueryClientProvider>
    );

}

export default Providers;
