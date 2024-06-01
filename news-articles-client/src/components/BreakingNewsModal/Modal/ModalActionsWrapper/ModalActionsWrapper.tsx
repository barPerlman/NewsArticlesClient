import React from "react";
import {ModalActionsWrapperStyles} from "../Modal.styles";
import ModalActionButtonsWrapper from "../ModalActionButtonsWrapper/ModalActionButtonsWrapper";

interface ModalActionsWrapperProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalActionsWrapper: React.FC<ModalActionsWrapperProps> = ({setModalIsOpen}) => {

    return (
        <ModalActionsWrapperStyles>
            <ModalActionButtonsWrapper setModalIsOpen={setModalIsOpen} />
        </ModalActionsWrapperStyles>
    );
}

export default ModalActionsWrapper;
