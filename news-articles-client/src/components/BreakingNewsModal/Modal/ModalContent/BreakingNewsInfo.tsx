import React from "react";
import {BreakingNewsInfoStyles} from "../Modal.styles";

interface BreakingNewsInfoProps {
    sourceName: string | null;
    author: string |null;
}
const BreakingNewsInfo: React.FC<BreakingNewsInfoProps> = ({sourceName, author}) => {

    return (
        <BreakingNewsInfoStyles>
            <div>
                <div>source: <b>{sourceName}</b></div>
            </div>
            <div>
                <div>author: <b>{author || 'No author'}</b></div>
            </div>
        </BreakingNewsInfoStyles>
    );
}

export default BreakingNewsInfo;
