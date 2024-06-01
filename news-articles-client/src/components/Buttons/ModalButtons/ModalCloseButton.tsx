import {RiCloseLine} from "react-icons/ri";
import React from "react";
import {ModalCloseButtonStyles} from "./ModalButtons.styles";

interface ModalCloseButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({setModalIsOpen}) => {

    return (
        <ModalCloseButtonStyles onClick={() => setModalIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
        </ModalCloseButtonStyles>
    );
}
export default ModalCloseButton;
