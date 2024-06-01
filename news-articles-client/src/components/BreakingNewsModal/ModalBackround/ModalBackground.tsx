import React from "react";
import {ModalBackgroundStyles} from "./ModalBackground.styles";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalBackgroundProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalBackground: React.FC<ModalBackgroundProps> = ({setModalIsOpen}) => {

    const {setBreakingNewsArticleMetadata} = useBreakingNewsContext();

    return (
        <ModalBackgroundStyles onClick={() => {
            setBreakingNewsArticleMetadata(null);
            setModalIsOpen(false);
        }}/>
    );
}

export default ModalBackground;
