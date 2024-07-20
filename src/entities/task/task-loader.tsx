import { FC } from "react";

import { Theme, theme } from "@shared/";
import * as Styled from "./styled";


interface ITaskLoaderProps {
    currentTheme: Theme;
}

export const TaskLoader: FC<ITaskLoaderProps> = ({ currentTheme }) => (
    <Styled.Container
        $formBackground={ theme[currentTheme].formBacground }
    >
        <Styled.TopBlock>
            <Styled.TopLoaderBig />
            <Styled.TopLoaderSmall />
        </Styled.TopBlock>
        <Styled.MiddleLoader />
        <Styled.BottomLoader />
    </Styled.Container>
);