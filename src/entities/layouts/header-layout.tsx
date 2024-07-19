import { FC } from "react";

import { theme } from "@shared/";
import { ILayout } from "./interface";
import * as Styled from "./styled";


export const HeaderLayout: FC<ILayout> = ({
    currentTheme,
    children,
}) => (
    <Styled.HeaderWrapper $headerBackground={ theme[currentTheme].headerBackground }>
        <Styled.Container>
            { children }
        </Styled.Container>
    </Styled.HeaderWrapper>
);