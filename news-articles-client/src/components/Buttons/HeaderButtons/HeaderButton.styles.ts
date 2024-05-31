import styled from "styled-components";

export const HeaderButtonStyles = styled.button.attrs({className: 'HeaderButton'})`
  width: 150px;
  height: 40px;
  border: 1px solid black;
  border-radius: 40px;


  &:hover {
    background-color: ${({ disabled }) =>
            disabled ? 'unset' : 'antiquewhite'};
    cursor: ${({ disabled }) =>
            disabled ? 'progress' : 'pointer'};
  }
  &:active {
    opacity: 0.8;
  }
  
  
`;
