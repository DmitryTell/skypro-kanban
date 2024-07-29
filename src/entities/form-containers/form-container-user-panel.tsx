import { FC } from "react";

import { themeProps } from "@shared/";
import { IFormContainer } from "./interfaces";
import { FormContainerUserPanelStyles } from "./styled";


export const FormContainerUserPanel: FC<IFormContainer> = ({
    currentTheme,
    children,
}) => (
    <FormContainerUserPanelStyles
        $userPanelBackground={ themeProps[currentTheme].userPanelBackground }
        $userPanelBorderColor={ themeProps[currentTheme].userPanelBorderColor }
        $userPanelShadowColor={ themeProps[currentTheme].userPanelShadowColor }
    >
        { children }
    </FormContainerUserPanelStyles>
);