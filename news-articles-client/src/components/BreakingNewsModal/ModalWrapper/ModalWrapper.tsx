
import {ModalWrapperStyles} from "./ModalWrapper.styles";
import React from "react";
import Modal from "../Modal/Modal";

interface ModalWrapperProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({setModalIsOpen}) => {

    return (
        <ModalWrapperStyles>
            <Modal setModalIsOpen={setModalIsOpen}/>
        </ModalWrapperStyles>
    );
}

export default ModalWrapper;
