import styled from "styled-components";

export const StreamAreaStyles = styled.div.attrs({className: 'StreamArea'})`
  margin: 10px;
  font-size: 14px;
  color: #2c3e50;
  height: 70%;
  overflow-y: scroll;
  border-radius: 0 0 10px 10px;
  padding: 10px;
  border: 1px solid #2c3e50;

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 20px;
    border: 3px solid transparent; /* Padding around thumb */
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar {
    width: 20px;
  }
`;
