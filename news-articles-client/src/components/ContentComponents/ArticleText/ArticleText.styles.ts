import styled from "styled-components";

export const ArticleTextStyles = styled.div.attrs({className: 'ArticleTextContainer'})`
  flex-grow: 0;
  width: 75%;
  padding: 4px;
  border-radius: 0 5px 5px 0;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  text-overflow: ellipsis;
  
`;
