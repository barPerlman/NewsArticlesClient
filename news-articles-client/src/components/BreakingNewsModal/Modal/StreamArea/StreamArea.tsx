import LiveTypewriter from "../../../LiveTypeWriter/LiveTypeWriter";
import React from "react";
import {StreamAreaStyles} from "./StreamArea.styles";
import {useBreakingNewsContext} from "../../../providers/BreakingNewsProvider/BreakingNewsProvider";

const StreamArea = () => {
    const {breakingNewsContent} = useBreakingNewsContext();

    return (
        <>
            { breakingNewsContent.length > 0 &&
                <StreamAreaStyles>
                    <LiveTypewriter text={breakingNewsContent} speed={20}/>
                </StreamAreaStyles>
            }
            { breakingNewsContent.length === 0 &&
                <StreamAreaStyles>
                    <LiveTypewriter text={'There is nothing to show.'} speed={20}/>
                </StreamAreaStyles>
            }
        </>

    );
}
export default StreamArea;
