import LiveTypewriter from "../../../LiveTypeWriter/LiveTypeWriter";
import React from "react";
import {StreamAreaStyles} from "./StreamArea.styles";
import useGetBreakingNewsStreamContent from "../../../../api/queries/useGetBreakingNewsStreamContent";
import {useBreakingNewsContext} from "../../../providers/BreakingNewsProvider/BreakingNewsProvider";

interface StreamAreaProps {
    articleId: string;
}

const StreamArea: React.FC<StreamAreaProps> = ({articleId}) => {
    const { breakingNewsContentLoading, breakingNewsContentError} = useGetBreakingNewsStreamContent(articleId);
    const {breakingNewsArticleContent} = useBreakingNewsContext();

    return (
        <>
            {/*isLoading become false right after getting the first chunk of stream*/}
            {breakingNewsContentLoading && <StreamAreaStyles>
                <LiveTypewriter text={'Loading'} speed={100}/>
            </StreamAreaStyles>}
            {breakingNewsContentError && <StreamAreaStyles>
                <LiveTypewriter text={'Failed to get article content'} speed={10}/>
            </StreamAreaStyles>}
            {breakingNewsArticleContent && <StreamAreaStyles>
                <LiveTypewriter text={breakingNewsArticleContent} speed={20}/>
            </StreamAreaStyles>}
        </>
    );
}
export default StreamArea;
