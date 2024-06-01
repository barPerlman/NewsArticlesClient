import React from "react";
import {BreakingNewsImageStyles} from "../Modal.styles";

interface BreakingNewsImageProps {
    imageUrl: string | null;
}
const BreakingNewsImage: React.FC<BreakingNewsImageProps> = ({imageUrl}) => {

    return (
        <BreakingNewsImageStyles>
            {imageUrl &&
                <img className="breaking-news-image-img" src={imageUrl} alt={'no url'}/>
            }
        </BreakingNewsImageStyles>
    );
}

export default BreakingNewsImage;
