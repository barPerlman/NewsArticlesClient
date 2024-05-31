import React, {PropsWithChildren} from "react";
import {HeaderButtonStyles} from './HeaderButton.styles';

interface HeaderButtonProps {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
}

const HeaderButton: React.FC<PropsWithChildren<HeaderButtonProps>> = ({handleClick, isDisabled, children}) => {
    return (
        <HeaderButtonStyles disabled={isDisabled} onClick={handleClick}>{children}</HeaderButtonStyles>
    );
}

export default HeaderButton;
