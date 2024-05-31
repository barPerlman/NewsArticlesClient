import HeaderButton from "../HeaderButtons/HeaderButton";
import useGetArticle from "../../../api/queries/useGetArticle";


const GetArticleButton = () => {

    const {getArticle, articleLoading} = useGetArticle();

    const handleGetArticleButtonClick = () => {
        getArticle()

    }

    return (
        <HeaderButton isDisabled={articleLoading} handleClick={handleGetArticleButtonClick}>Get Article</HeaderButton>
    );
}

export default GetArticleButton;
