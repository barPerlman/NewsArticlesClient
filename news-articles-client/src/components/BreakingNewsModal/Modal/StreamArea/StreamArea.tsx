import LiveTypewriter from "../../../LiveTypeWriter/LiveTypeWriter";
import React from "react";
import {StreamAreaStyles} from "./StreamArea.styles";
import useGetBreakingNewsStreamContent from "../../../../api/queries/useGetBreakingNewsStreamContent";

interface StreamAreaProps {
    articleId: string;
}

const StreamArea: React.FC<StreamAreaProps> = ({articleId}) => {
    const { breakingNewsContentLoading, breakingNewsContentError, breakingNewsStreamContent} = useGetBreakingNewsStreamContent(articleId);

    return (
        <>
            {breakingNewsContentLoading && <StreamAreaStyles>
                <LiveTypewriter text={'............................................................'} speed={100}/>
            </StreamAreaStyles>}
            {breakingNewsContentError && <StreamAreaStyles>
                <LiveTypewriter text={'Failed to get article content'} speed={10}/>
            </StreamAreaStyles>}
            {breakingNewsStreamContent && <StreamAreaStyles>
                <LiveTypewriter text={breakingNewsStreamContent} speed={20}/>
            </StreamAreaStyles>}
        </>
    );
}
export default StreamArea;
