import React from "react";
import {AppContentStyles} from "./AppContent.styles";
import NewsArticlesList from "../NewsArticlesList/NewsArticlesList";

/**
 * This component holds the content body of the site
 * Here the news articles list items is rendered
 */
const AppContent = () => {

    return (
        <AppContentStyles>
            <NewsArticlesList/>
        </AppContentStyles>
    );
}

export default AppContent;
