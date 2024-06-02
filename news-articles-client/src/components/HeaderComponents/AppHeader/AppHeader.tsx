import React from "react";
import HeaderButtonsGroup from "../HeaderButtonsGroup/HeaderButtonsGroup";
import ArticlesRetrievedStatus from "../../ArticlesRetrievedStatus/ArticlesRetrievedStatus";
import {AppHeaderStyles, ControlPanel} from './AppHeader.styles';

interface AppHeaderProps {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * This component holds the Action buttons and the retrieved counter status
 */
const AppHeader: React.FC<AppHeaderProps> = ({setBreakingNewsModalIsOpen}) => {

    return (
        <AppHeaderStyles>
            <ControlPanel>
                <HeaderButtonsGroup setBreakingNewsModalIsOpen={setBreakingNewsModalIsOpen}/>
                <ArticlesRetrievedStatus />
            </ControlPanel>
        </AppHeaderStyles>
    );
}

export default AppHeader;
