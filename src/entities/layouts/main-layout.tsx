import { FC } from "react";

import { theme } from "@shared/";
import { ILayout } from "./interface";
import * as Styled from "./styled";


export const MainLayout: FC<ILayout> = ({
    currentTheme,
    children,
}) => (
    <Styled.MainWrapper $wrapperBackground={ theme[currentTheme].wrapperBackground }>
        <Styled.Container>
            <Styled.TasksBox>
                { children }
            </Styled.TasksBox>
        </Styled.Container>
    </Styled.MainWrapper>
);