import React from "react";
import {ArticleSourceStyles} from "./ArticleSource.styles";

interface ArticleSourceProps {
    sourceName: string | null;
    author: string | null;
}

const ArticleTitle: React.FC<ArticleSourceProps> = ({sourceName, author}) => {

    return (
        <ArticleSourceStyles>{sourceName || 'N/A'}, <b>{author || 'N/A'}</b></ArticleSourceStyles>
    );

}

export default ArticleTitle;
