import React from "react";
import {AppFooterStyles} from "./AppFooter.styles";
import ArticlesRetrievedStatus from "../../ArticlesRetrievedStatus/ArticlesRetrievedStatus";

const AppFooter = () => {

    return (
        <AppFooterStyles>
            <ArticlesRetrievedStatus />
        </AppFooterStyles>
    );

}

export default AppFooter;
