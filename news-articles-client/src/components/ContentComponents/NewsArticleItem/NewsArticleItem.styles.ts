import styled from "styled-components";

export const NewsArticleItemStyles = styled.div.attrs({className: 'NewsArticleItem'})`
  height: 9vh;
  margin-top: 15px;
  display: flex;
  border: 0.1px solid black;
  border-radius: 5px;
  
  &:hover {
    cursor: pointer;
  }
`;
