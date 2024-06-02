import React from "react";
import ModalBackground from "./ModalBackround/ModalBackground";
import ModalWrapper from "./ModalWrapper/ModalWrapper";


interface BreakingNewsModalProp {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * The popup modal container which holds all the ui components related to display the Breaking News
 */
const BreakingNewsModal:React.FC<BreakingNewsModalProp> = ({setBreakingNewsModalIsOpen}) => {

    return (
        <>
            <ModalBackground setModalIsOpen={setBreakingNewsModalIsOpen}/>
            <ModalWrapper setModalIsOpen={setBreakingNewsModalIsOpen} />
        </>
    );
};

export default BreakingNewsModal;
