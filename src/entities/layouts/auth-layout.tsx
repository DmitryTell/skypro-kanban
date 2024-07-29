import { FC } from "react";

import { themeProps } from "@shared/";
import { ILayout } from "./interface";
import * as Styled from "./styled";


export const AuthLayout: FC<ILayout> = ({
    currentTheme,
    children,
}) => (
    <Styled.AuthWrapper $wrapperBackground={ themeProps[currentTheme].wrapperBackground }>
        <Styled.AuthContainer>
            { children }
        </Styled.AuthContainer>
    </Styled.AuthWrapper>
);