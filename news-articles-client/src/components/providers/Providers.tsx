import React, {PropsWithChildren} from "react";
import NewsArticlesProvider from "./NewsArticlesProvider/NewsArticlesProvider";
import {QueryClientProvider} from "react-query";
import queryClient from "../../api/QueryClient";

const Providers: React.FC<PropsWithChildren<{}>> = ({children}) => {

    return (
        <QueryClientProvider client={queryClient}>
            <NewsArticlesProvider>{children}</NewsArticlesProvider>
        </QueryClientProvider>
    );

}

export default Providers;
