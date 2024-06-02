import React from "react";
import {ModalBackgroundStyles} from "./ModalBackground.styles";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalBackgroundProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * This component roles as an overlay to get the modal in focus of user attention and exit the modal in case
 * of outside click
 */
const ModalBackground: React.FC<ModalBackgroundProps> = ({setModalIsOpen}) => {

    const {setBreakingNewsArticleMetadata, setBreakingNewsArticleContent} = useBreakingNewsContext();

    const handleClickBackground = () => {
        setBreakingNewsArticleMetadata(null);
        setBreakingNewsArticleContent('');
        setModalIsOpen(false);
    }

    return (
        <ModalBackgroundStyles onClick={handleClickBackground}/>
    );
}

export default ModalBackground;
