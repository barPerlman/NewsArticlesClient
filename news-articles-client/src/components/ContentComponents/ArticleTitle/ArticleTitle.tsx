import React from "react";
import {ArticleTitleStyles} from "./ArticleTitle.styles";

interface ArticleTitleProps {
    title: string | null;
}

const ArticleTitle: React.FC<ArticleTitleProps> = ({title}) => {

    return (
        <ArticleTitleStyles>{title || 'N/A'}</ArticleTitleStyles>
    );

}

export default ArticleTitle;
