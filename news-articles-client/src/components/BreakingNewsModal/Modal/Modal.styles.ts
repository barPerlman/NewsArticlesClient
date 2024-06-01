import styled from "styled-components";

export const ModalStyles = styled.div.attrs({className: 'ModalStyles'})`
  width: 50vw;
  height: 60vh;
  background: white;
  color: white;
  z-index: 2000;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid black;
`;

export const ModalHeaderStyles = styled.div.attrs({className: 'ModalHeaderStyles'})`
  height: 50px;
  background: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalHeaderTextStyles = styled.h5.attrs({className: 'ModalHeaderText'})`
  margin: 0;
  padding: 10px;
  color: #2c3e50;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const ModalContentStyles = styled.div.attrs({className: 'ModalContentStyles'})`
  padding: 10px;
  font-size: 14px;
  color: #2c3e50;
  height: 10%;
  display: flex;
  justify-content: space-between;
`;

export const BreakingNewsInfoStyles = styled.div.attrs({className: 'BreakingNewsInfoStyles'})`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const BreakingNewsImageStyles = styled.div.attrs({className: 'BreakingNewsImageStyles'})`
  width: 30%;
`;

export const ModalActionsWrapperStyles = styled.div.attrs({className: 'ModalActionsWrapperStyles'})`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ModalActionButtonsWrapperStyles = styled.div.attrs({className: 'ModalActionButtonsWrapperStyles'})`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
