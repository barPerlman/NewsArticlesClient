import React from "react";
import {BreakingNewsImageStyles} from "../Modal.styles";

interface BreakingNewsImageProps {
    imageUrl: string | null;
}
const BreakingNewsImage: React.FC<BreakingNewsImageProps> = ({imageUrl}) => {

    return (
        <BreakingNewsImageStyles>
            {imageUrl &&
                <img style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }} className="breaking-news-image-img" src={imageUrl} alt={'no url'}/>
            }
            {!imageUrl && <div>No Image Url</div>}
        </BreakingNewsImageStyles>
    );
}

export default BreakingNewsImage;
