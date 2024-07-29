import { FC } from "react";

import { themeProps } from "@shared/";
import { ITitle } from "./interface";
import { TitleModalH3Styles } from "./styled";


export const TitleModalH3: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleModalH3Styles
        $textColor={ themeProps[currentTheme].textColor }
    >
        { text }
    </TitleModalH3Styles>
);