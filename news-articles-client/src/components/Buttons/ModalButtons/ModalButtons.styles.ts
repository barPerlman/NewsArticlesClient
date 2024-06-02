import styled from "styled-components";

export const ModalCloseButtonStyles = styled.button.attrs({className: "ModalCloseButtonStyles"})`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: 1px solid black;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  
  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;


export const ModalCancelButtonStyles = styled.button.attrs({className: "ModalCloseButtonStyles"})`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 40px;
  font-size: 0.8rem;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;
  
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 1);
    transform: translateY(-5px);
    background: #ff3e4e;
  }
`;

export const ModalNextBreakingNewsButtonStyles = styled.button.attrs({className: "ModalCloseButtonStyles"})`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 40px;
  font-size: 0.8rem;
  border: none;
  color: #fcfcfc;
  background: #2c3e50;
  transition: all 0.25s ease;
  
  &:hover {
    box-shadow: 0 10px 20px -10px rgba(44, 62, 80, 1);
    transform: translateY(-5px);
    background: #2c3e50;
  }
`;
