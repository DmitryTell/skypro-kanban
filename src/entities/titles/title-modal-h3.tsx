import { FC } from "react";

import { theme } from "@shared/";
import { ITitle } from "./interface";
import { TitleModalH3Styles } from "./styled";


export const TitleModalH3: FC<ITitle> = ({
    text,
    currentTheme,
}) => (
    <TitleModalH3Styles
        $textColor={ theme[currentTheme].textColor }
    >
        { text }
    </TitleModalH3Styles>
);