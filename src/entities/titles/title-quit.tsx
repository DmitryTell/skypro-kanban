import { FC } from "react";

import { theme } from "@shared/";
import { ITitle } from "./interface";
import { TitleQuitStyles } from "./styled";


export const TitleQuit: FC<ITitle> = ({ currentTheme }) => (
    <TitleQuitStyles
        $textColor={ theme[currentTheme].textColor }
    >
        Выйти из аккаунта?
    </TitleQuitStyles>
);