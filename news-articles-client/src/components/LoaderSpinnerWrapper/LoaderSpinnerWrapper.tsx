import {ClipLoader} from "react-spinners";
import React from "react";
import {LoaderSpinnerWrapperStyles, LoaderSpinnerWrapperLabelStyles} from "./LoaderSpinnerWrapper.styles";
import {BreakingNewsModalLabels} from "../../common/constants/labels";

interface LoaderSpinnerWrapperProps {
    color?: string;
    size?: string;
}

const LoaderSpinnerWrapper:React.FC<LoaderSpinnerWrapperProps> = ({size, color}) => {

    return (
        <LoaderSpinnerWrapperStyles>
            <ClipLoader color={color || "#2c3e50"} size={size || '100px'}/>
            <LoaderSpinnerWrapperLabelStyles>{BreakingNewsModalLabels.LoadingLabel}</LoaderSpinnerWrapperLabelStyles>
        </LoaderSpinnerWrapperStyles>
    );
}

export default LoaderSpinnerWrapper;
