import React from "react";
import {ArticleDescriptionStyles} from "./ArticleDescriptionStyle";

interface ArticleDescriptionProps {
    description: string | null;
}

const ArticleDescription: React.FC<ArticleDescriptionProps> = ({description}) => {

    return (
        <ArticleDescriptionStyles>{description || 'N/A'} </ArticleDescriptionStyles>
    );
}

export default ArticleDescription;
