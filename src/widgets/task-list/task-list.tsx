import { FC } from "react";

import { useTheme } from "@features/";
import {
    Task,
    TaskLoader,
    TitleTasks,
} from "@entities/";
import { ITask, getDate } from "@shared/";
import { useTaskList } from "./hook";
import { loaders } from "./lib";
import * as Styled from "./styled";


interface ITaskListProps {
    tasks: ITask[];
    title: string;
    isLoading: boolean;
}

export const TaskList: FC<ITaskListProps> = ({
    tasks,
    title,
    isLoading,
}) => {
    const { theme } = useTheme();
    const { handleOpenTask } = useTaskList();

    return (
        <Styled.Container>
            <TitleTasks text={ title } />
            <Styled.List>
                { isLoading && loaders[title].map((key) => (
                    <TaskLoader
                        key={ key }
                        currentTheme={ theme }
                    />
                )) }
                { tasks.length && tasks.map((task) => (
                    <Task
                        $isReady={ title === "Готово" }
                        key={ task._id }
                        currentTheme={ theme }
                        topic={ task.topic }
                        title={ task.title }
                        date={ getDate(new Date(task.date)) }
                        onClick={ () => handleOpenTask(task._id) }
                    />
                )) }
            </Styled.List>
        </Styled.Container>
    );
};