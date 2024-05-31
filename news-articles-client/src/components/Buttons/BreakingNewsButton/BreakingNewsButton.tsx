import HeaderButton from "../HeaderButtons/HeaderButton";
import React from "react";

interface BreakingNewsButtonProps {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BreakingNewsButton: React.FC<BreakingNewsButtonProps> = ({setBreakingNewsModalIsOpen}) => {

    const handleBreakingNewsButtonClick = () => {
        setBreakingNewsModalIsOpen(true);
    }

    return (
        <HeaderButton handleClick={handleBreakingNewsButtonClick}>Breaking News</HeaderButton>
    );
}

export default BreakingNewsButton;
