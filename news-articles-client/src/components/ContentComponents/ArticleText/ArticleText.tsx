import React from "react";
import {ArticleDto} from "../../../common/types";
import {ArticleTextStyles} from "./ArticleText.styles";
import ArticleTitle from "../ArticleTitle/ArticleTitle";
import ArticleDescription from "../ArticleDescription/ArticleDescription";
import ArticleSource from "../ArticleSource/ArticleSource";

interface ArticleTextProps {
    articleDto: ArticleDto;
}

const ArticleText: React.FC<ArticleTextProps> = ({articleDto}) => {

    const {author, title, description, source } = articleDto;

    return (
        <ArticleTextStyles>
            <ArticleTitle title={title}/>
            <ArticleDescription description={description}/>
            <ArticleSource sourceName={source.name} author={author} />
        </ArticleTextStyles>
    );
}

export default ArticleText;
