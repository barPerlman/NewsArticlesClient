import styled from "styled-components";

export const ArticleDescriptionStyles = styled.div.attrs({className: 'ArticleDescriptionStyles'})`
  height: 60%;
  font-size: 14px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  
`;
