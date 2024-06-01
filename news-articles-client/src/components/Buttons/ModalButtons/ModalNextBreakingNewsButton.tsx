import React from "react";
import {ModalNextBreakingNewsButtonStyles} from "./ModalButtons.styles";

interface ModalNextBreakingNewsButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalNextBreakingNewsButton: React.FC<ModalNextBreakingNewsButtonProps> = ({setModalIsOpen}) => {

    return (
        <ModalNextBreakingNewsButtonStyles onClick={() => setModalIsOpen(false)}>Next Breaking News</ModalNextBreakingNewsButtonStyles>
    );
}

export default ModalNextBreakingNewsButton;
