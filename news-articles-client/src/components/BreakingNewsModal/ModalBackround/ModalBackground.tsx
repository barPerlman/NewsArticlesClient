import React from "react";
import {ModalBackgroundStyles} from "./ModalBackground.styles";

interface ModalBackgroundProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({setModalIsOpen}) => {

    return (
        <ModalBackgroundStyles onClick={() => setModalIsOpen(false)}/>
    );
}

export default ModalBackground;
