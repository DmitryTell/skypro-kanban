import { FC } from "react";

import { themeProps } from "@shared/";
import { ITitle } from "./interface";
import { TitleModalH4Styles } from "./styled";


export const TitleModalH4: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleModalH4Styles
        $textColor={ themeProps[currentTheme].textColor }
    >
        { text }
    </TitleModalH4Styles>
);