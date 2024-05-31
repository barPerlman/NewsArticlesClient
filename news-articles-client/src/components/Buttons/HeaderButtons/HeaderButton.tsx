import React, {PropsWithChildren} from "react";
import {HeaderButtonStyles} from './HeaderButton.styles';


const HeaderButton: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <HeaderButtonStyles>{children}</HeaderButtonStyles>
    );
}

export default HeaderButton;
