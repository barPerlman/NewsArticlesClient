import React from "react";
import {NewsArticleItemStyles} from "./NewsArticleItem.styles";
import {ArticleDto} from "../../../common/types";
import ArticleImage from "../ArticleImage/ArticleImage";
import ArticleText from "../ArticleText/ArticleText";

interface NewsArticleItemProps {
    articleDto: ArticleDto;
}
const NewsArticleItem: React.FC<NewsArticleItemProps> = ({articleDto}) => {

    const {urlToImage, url} = articleDto;

    const handleNewsArticleClick = () => {
        window.open(url);
    }

    return (
        <NewsArticleItemStyles onClick={handleNewsArticleClick}>
            <ArticleImage imageUrl={urlToImage}/>
            <ArticleText articleDto={articleDto} />
        </NewsArticleItemStyles>



    );
}

export default NewsArticleItem;
