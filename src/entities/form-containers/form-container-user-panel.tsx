import { FC } from "react";

import { theme } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerUserPanelStyles } from "./styled";


export const FormContainerUserPanel: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerUserPanelStyles
        $userPanelBackground={ theme[currentTheme].userPanelBackground }
        $userPanelBorderColor={ theme[currentTheme].userPanelBorderColor }
        $userPanelShadowColor={ theme[currentTheme].userPanelShadowColor }
    >
        { children }
    </FormContainerUserPanelStyles>
);