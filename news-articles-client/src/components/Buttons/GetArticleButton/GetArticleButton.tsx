import HeaderButton from "../HeaderButtons/HeaderButton";
import useGetArticle from "../../../api/queries/useGetArticle";
import {HeaderButtonsLabels} from "../../../common/constants/labels";


const GetArticleButton = () => {

    const {getArticle, articleLoading} = useGetArticle();

    const handleGetArticleButtonClick = () => {
        getArticle();
    }

    return (
        <HeaderButton isDisabled={articleLoading} handleClick={handleGetArticleButtonClick}>{HeaderButtonsLabels.GetArticle}</HeaderButton>
    );
}

export default GetArticleButton;
