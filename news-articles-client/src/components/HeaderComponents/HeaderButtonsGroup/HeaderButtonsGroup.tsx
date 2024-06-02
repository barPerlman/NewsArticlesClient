import React from "react";
import {HeaderButtonsGroupStyles} from './HeaderButtonsGroup.styles';
import GetArticleButton from "../../Buttons/GetArticleButton/GetArticleButton";
import BreakingNewsButton from "../../Buttons/BreakingNewsButton/BreakingNewsButton";


interface HeaderButtonsGroupProps {
   setBreakingNewsModalIsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderButtonsGroup:React.FC<HeaderButtonsGroupProps> = ({setBreakingNewsModalIsOpen}) => {

    return (
        <HeaderButtonsGroupStyles>

            <GetArticleButton />
            <BreakingNewsButton setBreakingNewsModalIsOpen={setBreakingNewsModalIsOpen}/>
        </HeaderButtonsGroupStyles>
    );
}

export default HeaderButtonsGroup;
