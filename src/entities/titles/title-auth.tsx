import { FC } from "react";

import { theme } from "@shared/";
import { ITitle } from "./interface";
import { TitleAuthStyles } from "./styled";


export const TitleAuth: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleAuthStyles
        $textColor={ theme[currentTheme].textColor }
    >
        { text }
    </TitleAuthStyles>
);