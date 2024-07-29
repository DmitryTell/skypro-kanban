import { FC } from "react";

import { themeProps } from "@shared/";
import { ITitle } from "./interface";
import { TitleAuthStyles } from "./styled";


export const TitleAuth: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleAuthStyles
        $textColor={ themeProps[currentTheme].textColor }
    >
        { text }
    </TitleAuthStyles>
);