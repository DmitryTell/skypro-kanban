import { FC } from "react";

import Edit from "./icon/edit.svg?react";
import Date from "./icon/date.svg?react";
import {
    CategoryIconTask,
    Theme,
    themeProps,
} from "@shared/";
import * as Styled from "./styled";


interface ITaskProps {
    $isReady: boolean;
    currentTheme: Theme;
    topic: string;
    title: string;
    date: string;
    onClick: React.MouseEventHandler;
}

export const Task: FC<ITaskProps> = ({
    $isReady,
    currentTheme,
    topic,
    title,
    date,
    onClick,
}) => (
    <Styled.Container
        $formBackground={ themeProps[currentTheme].formBacground }
    >
        <Styled.TopBlock>
            <CategoryIconTask topic={ topic } />
            <Styled.EditTaskButton
                type="button"
                onClick={ onClick }
            >
                <Edit />
            </Styled.EditTaskButton>
        </Styled.TopBlock>
        <Styled.Title
            $textColor={ themeProps[currentTheme].textColor }
            $isReady={ $isReady }
        >
            { title }
        </Styled.Title>
        <Styled.DateBlock>
            <Date />
            <Styled.DateText>{ date }</Styled.DateText>
        </Styled.DateBlock>
    </Styled.Container>
);