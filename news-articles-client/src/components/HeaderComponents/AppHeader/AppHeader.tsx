import React from "react";
import HeaderButtonsGroup from "../HeaderButtonsGroup/HeaderButtonsGroup";
import ArticlesRetrievedStatus from "../../ArticlesRetrievedStatus/ArticlesRetrievedStatus";
import {AppHeaderStyles, ControlPanel} from './AppHeader.styles';

const AppHeader = () => {

    return (
        <AppHeaderStyles>
            <ControlPanel>
                <HeaderButtonsGroup />
                <ArticlesRetrievedStatus />
            </ControlPanel>
        </AppHeaderStyles>
    );
}

export default AppHeader;
