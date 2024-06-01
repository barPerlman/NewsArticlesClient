import styled from "styled-components";

export const ModalBackgroundStyles = styled.div.attrs({className: 'ModalBackgroundStyles'})`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 1500;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;
