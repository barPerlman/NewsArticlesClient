import React from "react";
import {useBreakingNewsContext} from "../../../providers/BreakingNewsProvider/BreakingNewsProvider";
import {ModalContentStyles} from "../Modal.styles";
import BreakingNewsInfo from "./BreakingNewsInfo";
import BreakingNewsImage from "./BreakingNewsImage";

/**
 * This component includes the components that shows the breaking news source, author, image
 */
const ModalContent = () => {
    const {breakingNewsArticleMetadata} = useBreakingNewsContext();

    return (
        <>
        {breakingNewsArticleMetadata &&
            <ModalContentStyles>
                <BreakingNewsInfo sourceName={breakingNewsArticleMetadata?.source.name} author={breakingNewsArticleMetadata?.author} />
                <BreakingNewsImage  imageUrl={breakingNewsArticleMetadata?.urlToImage || null}/>
            </ModalContentStyles>
        }
        </>
    );
}

export default ModalContent;
