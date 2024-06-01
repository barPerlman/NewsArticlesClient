import React from "react";

import ModalBackground from "./ModalBackround/ModalBackground";
import ModalWrapper from "./ModalWrapper/ModalWrapper";

interface BreakingNewsModalProp {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BreakingNewsModal:React.FC<BreakingNewsModalProp> = ({setBreakingNewsModalIsOpen}) => {

    return (
        <>
            <ModalBackground setModalIsOpen={setBreakingNewsModalIsOpen}/>
            <ModalWrapper setModalIsOpen={setBreakingNewsModalIsOpen} />
        </>
    );
};

export default BreakingNewsModal;
