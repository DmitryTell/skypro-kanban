import { FC } from "react";

import { ITitleTasks } from "./interface";
import { TitleTasksStyles } from "./styled";


export const TitleTasks: FC<ITitleTasks> = ({ text }) => (
    <TitleTasksStyles>
        { text }
    </TitleTasksStyles>
);