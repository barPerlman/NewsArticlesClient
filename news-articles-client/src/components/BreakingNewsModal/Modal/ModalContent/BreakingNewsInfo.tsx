import React from "react";
import {BreakingNewsInfoStyles} from "../Modal.styles";

interface BreakingNewsInfoProps {
    sourceName: string | null;
    author: string |null;
}
const BreakingNewsInfo: React.FC<BreakingNewsInfoProps> = ({sourceName, author}) => {

    return (
        <BreakingNewsInfoStyles>
            <div>source: {sourceName}</div>
            <div>author: {author}</div>
        </BreakingNewsInfoStyles>
    );
}

export default BreakingNewsInfo;
