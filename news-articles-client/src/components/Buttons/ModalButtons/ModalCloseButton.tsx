import {RiCloseLine} from "react-icons/ri";
import React from "react";
import {ModalCloseButtonStyles} from "./ModalButtons.styles";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface ModalCloseButtonProps {
    setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({setModalIsOpen}) => {

    const {setBreakingNewsArticleMetadata, setBreakingNewsArticleContent} = useBreakingNewsContext();

    const handleCloseClick = () => {
        setBreakingNewsArticleMetadata(null);
        setBreakingNewsArticleContent('');
        setModalIsOpen(false);
    }

    return (
        <ModalCloseButtonStyles onClick={handleCloseClick}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
        </ModalCloseButtonStyles>
    );
}
export default ModalCloseButton;
