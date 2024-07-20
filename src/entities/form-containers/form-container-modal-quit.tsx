import { FC } from "react";

import { theme } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerModalQuitStyles } from "./styled";


export const FormContainerModalQuit: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerModalQuitStyles
        $formBacground={ theme[currentTheme].formBacground }
        $formBorderColor={ theme[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerModalQuitStyles>
);