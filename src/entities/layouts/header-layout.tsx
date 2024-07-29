import { FC } from "react";

import { themeProps } from "@shared/";
import { ILayout } from "./interface";
import * as Styled from "./styled";


export const HeaderLayout: FC<ILayout> = ({
    currentTheme,
    children,
}) => (
    <Styled.HeaderWrapper $headerBackground={ themeProps[currentTheme].headerBackground }>
        <Styled.Container>
            { children }
        </Styled.Container>
    </Styled.HeaderWrapper>
);