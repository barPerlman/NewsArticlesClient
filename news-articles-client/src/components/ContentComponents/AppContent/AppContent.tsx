import React from "react";
import {AppContentStyles} from "./AppContent.styles";
import NewsArticlesList from "../NewsArticlesList/NewsArticlesList";

const AppContent = () => {

    return (
        <AppContentStyles>
            <NewsArticlesList />
        </AppContentStyles>
    );
}

export default AppContent;
