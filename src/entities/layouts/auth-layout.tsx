import { FC } from "react";

import { theme } from "@shared/";
import { ILayout } from "./interface";
import * as Styled from "./styled";


export const AuthLayout: FC<ILayout> = ({
    currentTheme,
    children,
}) => (
    <Styled.AuthWrapper $wrapperBackground={ theme[currentTheme].wrapperBackground }>
        <Styled.AuthContainer>
            { children }
        </Styled.AuthContainer>
    </Styled.AuthWrapper>
);