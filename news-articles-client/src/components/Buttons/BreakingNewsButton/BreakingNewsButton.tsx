import HeaderButton from "../HeaderButtons/HeaderButton";
import React from "react";
import useGetBreakingNews from "../../../api/queries/useGetBreakingNews";

interface BreakingNewsButtonProps {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BreakingNewsButton: React.FC<BreakingNewsButtonProps> = ({setBreakingNewsModalIsOpen}) => {

    const {getBreakingNews} = useGetBreakingNews();

    const handleBreakingNewsButtonClick = () => {
        getBreakingNews();
        setBreakingNewsModalIsOpen(true);
    }

    return (
        <HeaderButton handleClick={handleBreakingNewsButtonClick}>Breaking News</HeaderButton>
    );
}

export default BreakingNewsButton;
