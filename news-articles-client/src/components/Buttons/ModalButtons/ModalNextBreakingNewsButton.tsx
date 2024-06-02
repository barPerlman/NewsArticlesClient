import React from "react";
import {ModalNextBreakingNewsButtonStyles} from "./ModalButtons.styles";
import useGetBreakingNews from "../../../api/queries/useGetBreakingNews";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";
import {BreakingNewsModalLabels} from "../../../common/constants/labels";



const ModalNextBreakingNewsButton: React.FC = () => {
    const {setBreakingNewsArticleMetadata} = useBreakingNewsContext();
    const {getBreakingNews} = useGetBreakingNews();

    const handleNextBreakingNewsButtonClick = () => {
        setBreakingNewsArticleMetadata(null);
        getBreakingNews()
    }

    return (
        <ModalNextBreakingNewsButtonStyles onClick={handleNextBreakingNewsButtonClick}>{BreakingNewsModalLabels.NextBreakingNewsButton}</ModalNextBreakingNewsButtonStyles>
    );
}

export default ModalNextBreakingNewsButton;
