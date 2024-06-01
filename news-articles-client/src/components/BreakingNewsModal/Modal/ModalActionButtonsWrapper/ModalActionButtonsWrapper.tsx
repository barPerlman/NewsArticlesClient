import ModalStopButton from "../../../Buttons/ModalButtons/ModalStopButton";
import ModalNextBreakingNewsButton from "../../../Buttons/ModalButtons/ModalNextBreakingNewsButton";
import React from "react";
import {ModalActionButtonsWrapperStyles} from "../Modal.styles";

interface ModalActionButtonsWrapperProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalActionButtonsWrapper: React.FC<ModalActionButtonsWrapperProps> = ({setModalIsOpen}) => {

    return (
        <ModalActionButtonsWrapperStyles>
            <ModalStopButton setModalIsOpen={setModalIsOpen} />
            <ModalNextBreakingNewsButton setModalIsOpen={setModalIsOpen} />
        </ModalActionButtonsWrapperStyles>
    );
}

export default ModalActionButtonsWrapper;
