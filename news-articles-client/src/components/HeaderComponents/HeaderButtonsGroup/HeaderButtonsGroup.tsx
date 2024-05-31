import React from "react";
import {HeaderButtonsGroupStyles} from './HeaderButtonsGroup.styles';
import GetArticleButton from "../../Buttons/GetArticleButton/GetArticleButton";
import BreakingNewsButton from "../../Buttons/BreakingNewsButton/BreakingNewsButton";

const HeaderButtonsGroup = () => {

    return (
        <HeaderButtonsGroupStyles>
            <GetArticleButton />
            <BreakingNewsButton />
        </HeaderButtonsGroupStyles>
    );
}

export default HeaderButtonsGroup;
