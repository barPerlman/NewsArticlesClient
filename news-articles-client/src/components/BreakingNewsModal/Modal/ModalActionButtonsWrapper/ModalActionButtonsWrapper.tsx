import ModalCancelButton from "../../../Buttons/ModalButtons/ModalCancelButton";
import ModalNextBreakingNewsButton from "../../../Buttons/ModalButtons/ModalNextBreakingNewsButton";
import React from "react";
import {ModalActionButtonsWrapperStyles} from "../Modal.styles";

interface ModalActionButtonsWrapperProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalActionButtonsWrapper: React.FC<ModalActionButtonsWrapperProps> = ({setModalIsOpen}) => {

    return (
        <ModalActionButtonsWrapperStyles>
            <ModalCancelButton setModalIsOpen={setModalIsOpen} />
            <ModalNextBreakingNewsButton />
        </ModalActionButtonsWrapperStyles>
    );
}

export default ModalActionButtonsWrapper;
