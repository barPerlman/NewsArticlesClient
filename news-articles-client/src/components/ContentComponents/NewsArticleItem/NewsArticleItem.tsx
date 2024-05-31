import React from "react";
import {NewsArticleItemStyles} from "./NewsArticleItem.styles";
import {ArticleDto} from "../../../common/types";
import ArticleImage from "../ArticleImage/ArticleImage";
import ArticleText from "../ArticleText/ArticleText";

interface NewsArticleItemProps {
    articleDto: ArticleDto;
}
const NewsArticleItem: React.FC<NewsArticleItemProps> = ({articleDto}) => {

    return (
        <NewsArticleItemStyles>
            <ArticleImage imageUrl={articleDto.urlToImage}/>
            <ArticleText articleDto={articleDto} />
        </NewsArticleItemStyles>



    );
}

export default NewsArticleItem;
