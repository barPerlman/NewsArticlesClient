import React from "react";
import HeaderButtonsGroup from "../HeaderButtonsGroup/HeaderButtonsGroup";
import {AppHeaderStyles, ControlPanel} from './AppHeader.styles';
import useKeyPress from "../../../hooks/useKeyPress";
import {useBreakingNewsContext} from "../../providers/BreakingNewsProvider/BreakingNewsProvider";
import HeaderStatuses from "../HeaderStatuses/HeaderStatuses";

interface AppHeaderProps {
    setBreakingNewsModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * This component holds the Action buttons and the retrieved counter status
 */
const AppHeader: React.FC<AppHeaderProps> = ({setBreakingNewsModalIsOpen}) => {
    const {setBreakingNewsArticleMetadata, setBreakingNewsArticleContent} = useBreakingNewsContext();
    useKeyPress('Escape', () => {
        setBreakingNewsArticleMetadata(null);
        setBreakingNewsArticleContent('');
        setBreakingNewsModalIsOpen(false);
    });
    return (
        <AppHeaderStyles>
            <ControlPanel>
                <HeaderButtonsGroup setBreakingNewsModalIsOpen={setBreakingNewsModalIsOpen}/>
                <HeaderStatuses />
            </ControlPanel>
        </AppHeaderStyles>
    );
}

export default AppHeader;
