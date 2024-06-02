import React from "react";
import {ModalErrorMessageStyles} from "./ModalErrorMessage.styles";
import {BreakingNewsModalLabels} from "../../../common/constants/labels";

const ModalErrorMessage = () => {

    return (
        <ModalErrorMessageStyles>{BreakingNewsModalLabels.ErrorMessage}</ModalErrorMessageStyles>
    );
}

export default ModalErrorMessage;
