import React from "react";
import {ModalStyles} from "./Modal.styles";
import ModalHeader from "./ModalHeader/ModalHeader";
import ModalCloseButton from "../../Buttons/ModalButtons/ModalCloseButton";
import ModalContent from "./ModalContent/ModalContent";
import StreamArea from "./StreamArea/StreamArea";
import ModalActionsWrapper from "./ModalActionsWrapper/ModalActionsWrapper";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal: React.FC<ModalProps> = ({setModalIsOpen}) => {
    const {breakingNewsArticleMetadata} = useBreakingNewsContext();
    return (
        <ModalStyles>
           <ModalHeader />
           <ModalCloseButton setModalIsOpen={setModalIsOpen} />
            <ModalContent />
            {breakingNewsArticleMetadata && <StreamArea articleId={breakingNewsArticleMetadata.id}/>}
            <ModalActionsWrapper setModalIsOpen={setModalIsOpen} />
        </ModalStyles>
    );
}

export default Modal;
