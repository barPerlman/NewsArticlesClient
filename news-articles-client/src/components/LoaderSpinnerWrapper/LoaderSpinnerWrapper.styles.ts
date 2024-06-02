import styled from "styled-components";

export const LoaderSpinnerWrapperStyles = styled.div.attrs({className: 'LoaderSpinnerWrapperStyles'})`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  justify-content: space-between;
`;

export const LoaderSpinnerWrapperLabelStyles = styled.label.attrs({className: 'LoaderSpinnerWrapperLabelStyles'})`
  margin-top: 5px;
  padding-left: 21px;
  color: #2c3e50;
`;
