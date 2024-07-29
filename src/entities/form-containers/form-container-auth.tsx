import { FC } from "react";

import { themeProps } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerAuthStyles } from "./styled";


export const FormContainerAuth: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerAuthStyles
        $formBacground={ themeProps[currentTheme].formBacground }
        $formBorderColor={ themeProps[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerAuthStyles>
);