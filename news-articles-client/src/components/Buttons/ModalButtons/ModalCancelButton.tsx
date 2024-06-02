import React from "react";
import {ModalCancelButtonStyles} from "./ModalButtons.styles";
import {BreakingNewsModalLabels} from "../../../common/constants/labels";

interface ModalStopButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCancelButton: React.FC<ModalStopButtonProps> = ({setModalIsOpen}) => {

    return (
        <ModalCancelButtonStyles onClick={() => setModalIsOpen(false)}>{BreakingNewsModalLabels.CancelButton}</ModalCancelButtonStyles>
    );
}

export default ModalCancelButton;
