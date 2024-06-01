import React from "react";
import {ModalHeaderStyles} from "../Modal.styles";
import ModalHeaderText from "./ModalHeaderText/ModalHeaderText";

const ModalHeader = () => {
  return (
      <ModalHeaderStyles>
          <ModalHeaderText />
      </ModalHeaderStyles>
  );
}

export default ModalHeader;
