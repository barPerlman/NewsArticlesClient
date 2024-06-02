import React from "react";
import {ModalCancelButtonStyles} from "./ModalButtons.styles";
import {BreakingNewsModalLabels} from "../../../common/constants/labels";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalStopButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCancelButton: React.FC<ModalStopButtonProps> = ({setModalIsOpen}) => {

    const {setBreakingNewsArticleMetadata, setBreakingNewsArticleContent} = useBreakingNewsContext();
    const handleCancelClick = () => {
        setBreakingNewsArticleMetadata(null);
        setBreakingNewsArticleContent('');
        setModalIsOpen(false);
    }

    return (
        <ModalCancelButtonStyles onClick={handleCancelClick}>{BreakingNewsModalLabels.CancelButton}</ModalCancelButtonStyles>
    );
}

export default ModalCancelButton;
