import React, {PropsWithChildren} from "react";
import NewsArticlesProvider from "./NewsArticlesProvider/NewsArticlesProvider";
import {QueryClientProvider} from "react-query";
import queryClient from "../../api/QueryClient";
import BreakingNewsProvider from "./BreakingNewsProvider/BreakingNewsProvider";

/**
 * Creating a provider component which can wrap the app with all the providers available
 */
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
