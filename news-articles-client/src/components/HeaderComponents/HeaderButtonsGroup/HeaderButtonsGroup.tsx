import React from "react";
import {HeaderButtonsGroupStyles} from './HeaderButtonsGroup.styles';
import HeaderButton from "../../Buttons/HeaderButtons/HeaderButton";

const HeaderButtonsGroup = () => {

    return (
        <HeaderButtonsGroupStyles>
            <HeaderButton>Get Article</HeaderButton>
            <HeaderButton>Breaking News</HeaderButton>
        </HeaderButtonsGroupStyles>
    );
}

export default HeaderButtonsGroup;
