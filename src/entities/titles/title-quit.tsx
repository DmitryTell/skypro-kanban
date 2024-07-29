import { FC } from "react";

import { themeProps } from "@shared/";
import { ITitle } from "./interface";
import { TitleQuitStyles } from "./styled";


export const TitleQuit: FC<ITitle> = ({ currentTheme }) => (
    <TitleQuitStyles
        $textColor={ themeProps[currentTheme].textColor }
    >
        Выйти из аккаунта?
    </TitleQuitStyles>
);