import React from "react";
import {ModalNextBreakingNewsButtonStyles} from "./ModalButtons.styles";
import useGetBreakingNews from "../../../api/queries/useGetBreakingNews";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalNextBreakingNewsButtonProps {
}

const ModalNextBreakingNewsButton: React.FC<ModalNextBreakingNewsButtonProps> = () => {
    const {setBreakingNewsArticleMetadata} = useBreakingNewsContext();

    const {getBreakingNews} = useGetBreakingNews();


    const handleNextBreakingNewsButtonClick = () => {
        setBreakingNewsArticleMetadata(null);
        getBreakingNews()

    }


    return (
        <ModalNextBreakingNewsButtonStyles onClick={handleNextBreakingNewsButtonClick}>Next Breaking News</ModalNextBreakingNewsButtonStyles>
    );
}

export default ModalNextBreakingNewsButton;
