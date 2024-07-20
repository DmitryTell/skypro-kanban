import { FC } from "react";

import { theme } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerModalStyles } from "./styled";


export const FormContainerModal: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerModalStyles
        $formBacground={ theme[currentTheme].formBacground }
        $formBorderColor={ theme[currentTheme].formBorderColor }
    >
        { children }
    </FormContainerModalStyles>
);