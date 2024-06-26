import styled from "styled-components";

export const StreamAreaStyles = styled.div.attrs({className: 'StreamArea'})`
  margin: 10px;
  font-size: 14px;
  color: #2c3e50;
  height: 53%;
  overflow-y: auto; //add scroll bar in case the text overflow its paragraph size
  border-radius: 0 0 10px 10px;
  padding: 10px;
  border: 1px solid #2c3e50;

  // changing the scroll style to fit the app theme
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 20px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar {
    width: 20px;
  }
`;
