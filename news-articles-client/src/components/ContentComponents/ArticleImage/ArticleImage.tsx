import React from "react";
import {ArticleImageStyles} from "./ArticleImage.styles";

interface ArticleImageProps {
    imageUrl: string | null;
}

const ArticleImage: React.FC<ArticleImageProps> = ({imageUrl}) => {

    return (
        <ArticleImageStyles imageUrl={imageUrl}>  <div>{imageUrl ? '' : 'N/A'}</div> </ArticleImageStyles>
    );
}

export default ArticleImage;
