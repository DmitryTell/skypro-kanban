import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ITask } from "@shared/";


export interface ITasksProps {
    tasks: ITask[];
    isLoading: boolean;
    title: string;
    description: string;
    topic: string;
    status: string;
    date: string;
}

const initialState: ITasksProps = {
    tasks: [],
    isLoading: true,
    title: "",
    description: "",
    topic: "",
    status: "",
    date: "",
};

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setTasks(state, action: PayloadAction<{ tasks: ITask[] }>) {
            const { tasks } = action.payload;

            state.tasks = tasks;
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
    },
});

export const {
    setTasks,
    setIsLoading,
    setTaskProps,
} = tasksSlice.actions;