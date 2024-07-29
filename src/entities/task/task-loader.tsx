import { FC } from "react";

import { Theme, themeProps } from "@shared/";
import * as Styled from "./styled";


interface ITaskLoaderProps {
    currentTheme: Theme;
}

export const TaskLoader: FC<ITaskLoaderProps> = ({ currentTheme }) => (
    <Styled.Container
        $formBackground={ themeProps[currentTheme].formBacground }
    >
        <Styled.TopBlock>
            <Styled.TopLoaderBig />
            <Styled.TopLoaderSmall />
        </Styled.TopBlock>
        <Styled.MiddleLoader />
        <Styled.BottomLoader />
    </Styled.Container>
);