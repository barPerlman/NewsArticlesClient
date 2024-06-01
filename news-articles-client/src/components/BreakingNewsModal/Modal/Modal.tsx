import React from "react";
import {ModalStyles} from "./Modal.styles";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalCloseButton from "../../Buttons/ModalButtons/ModalCloseButton";
import ModalContent from "./ModalContent/ModalContent";
import StreamArea from "./StreamArea/StreamArea";
import ModalActionsWrapper from "./ModalActionsWrapper/ModalActionsWrapper";

interface ModalProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({setModalIsOpen}) => {

    return (
        <ModalStyles>
           <ModalHeader />
           <ModalCloseButton setModalIsOpen={setModalIsOpen} />
            <ModalContent />
            <StreamArea />
            <ModalActionsWrapper setModalIsOpen={setModalIsOpen} />
        </ModalStyles>
    );
}

export default Modal;
