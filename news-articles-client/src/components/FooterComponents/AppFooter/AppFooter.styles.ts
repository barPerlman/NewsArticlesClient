import styled from "styled-components";

export const AppFooterStyles = styled.footer.attrs({className: 'AppFooter'})`
  min-height: 5vh;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;
