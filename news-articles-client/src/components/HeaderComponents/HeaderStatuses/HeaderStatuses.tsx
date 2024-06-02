import ArticlesRetrievedStatus from "../../ArticlesRetrievedStatus/ArticlesRetrievedStatus";
import LoaderSpinnerWrapper from "../../LoaderSpinnerWrapper/LoaderSpinnerWrapper";
import {GetArticleStatusStyles} from "../../GetArticleStatus/GetArticleStatus.styles";
import {HeaderLabels} from "../../../common/constants/labels";
import React from "react";
import {useNewsArticlesContext} from "../../providers/NewsArticlesProvider/NewsArticlesProvider";
import {HeaderstatusesStyles} from "./Headerstatuses.styles";

const HeaderStatuses = () => {
    const {isLoadingArticle, isErrorArticle} = useNewsArticlesContext();

    return (
        <HeaderstatusesStyles>
            <ArticlesRetrievedStatus />
            {isLoadingArticle ? <LoaderSpinnerWrapper color={'white'} size={'50px'}/> :
                (isErrorArticle ? <GetArticleStatusStyles>{HeaderLabels.GetArticleRequestFailed}
                </GetArticleStatusStyles> : null)}
        </HeaderstatusesStyles>
    );
}

export default HeaderStatuses;
