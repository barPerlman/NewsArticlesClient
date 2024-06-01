import React from "react";
import {ModalStopButtonStyles} from "./ModalButtons.styles";

interface ModalStopButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalStopButton: React.FC<ModalStopButtonProps> = ({setModalIsOpen}) => {

    return (
        <ModalStopButtonStyles onClick={() => setModalIsOpen(false)}>Stop</ModalStopButtonStyles>
    );
}

export default ModalStopButton;
