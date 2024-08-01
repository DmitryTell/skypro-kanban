import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask } from "@shared/";


export interface ITasksProps {
    tasks: ITask[];
    currentTask: ITask | null;
    isLoading: boolean;
    title: string;
    description: string;
    topic: string;
    status: string;
    date: string;
    errorText: string;
}

const initialState: ITasksProps = {
    tasks: [],
    currentTask: null,
    isLoading: true,
    title: "",
    description: "",
    topic: "",
    status: "",
    date: "",
    errorText: "",
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<{ tasks: ITask[] }>) {
            const { tasks } = action.payload;

            state.tasks = tasks;
        },
        setCurrentTask(state, action: PayloadAction<{ currentTask: ITask | null }>) {
            const { currentTask } = action.payload;

            state.currentTask = currentTask;
        },
        setIsLoading(state, action: PayloadAction<{ isLoading: boolean }>) {
            const { isLoading } = action.payload;

            state.isLoading = isLoading;
        },
        setTaskProps(state, action: PayloadAction<{
            title: string;
            description: string;
            topic: string;
            status: string;
            date: string;
        }>) {
            const {
                title,
                description,
                topic,
                status,
                date,
            } = action.payload;

            state.title = title;
            state.description = description;
            state.topic = topic;
            state.status = status;
            state.date = date;
        },
        setErrorText(state, action: PayloadAction<{ errorText: string }>) {
            const { errorText } = action.payload;

            state.errorText = errorText;
        },
    },
});

export const {
    setTasks,
    setCurrentTask,
    setIsLoading,
    setTaskProps,
    setErrorText,
} = tasksSlice.actions;