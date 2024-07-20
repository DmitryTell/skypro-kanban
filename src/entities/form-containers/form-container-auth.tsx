import { FC } from "react";

import { theme } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerAuthStyles } from "./styled";


export const FormContainerAuth: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerAuthStyles
        $formBacground={ theme[currentTheme].formBacground }
        $formBorderColor={ theme[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerAuthStyles>
);