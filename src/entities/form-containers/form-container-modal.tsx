import { FC } from "react";

import { themeProps } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerModalStyles } from "./styled";


export const FormContainerModal: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerModalStyles
        $formBacground={ themeProps[currentTheme].formBacground }
        $formBorderColor={ themeProps[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerModalStyles>
);