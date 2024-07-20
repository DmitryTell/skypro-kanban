import { FC } from "react";

import { theme } from "@shared/";
import { ITitle } from "./interface";
import { TitleModalH4Styles } from "./styled";


export const TitleModalH4: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleModalH4Styles
        $textColor={ theme[currentTheme].textColor }
    >
        { text }
    </TitleModalH4Styles>
);