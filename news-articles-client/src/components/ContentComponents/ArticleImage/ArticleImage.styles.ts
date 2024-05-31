import styled from "styled-components";
interface ArticleImageStylesProps {
    imageUrl: string | null;
}
export const ArticleImageStyles = styled.div.attrs({className: 'ArticleImage'})<ArticleImageStylesProps>`
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'unset'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 25%;
  border-radius: 5px 0 0 5px;
  text-align: center;
  justify-content: center;
  align-content: center;
`;
