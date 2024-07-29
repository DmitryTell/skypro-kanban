import { FC } from "react";

import { themeProps } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerModalQuitStyles } from "./styled";


export const FormContainerModalQuit: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerModalQuitStyles
        $formBacground={ themeProps[currentTheme].formBacground }
        $formBorderColor={ themeProps[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerModalQuitStyles>
);