import type { RootState } from "./store";


export const getModalsState = (state: RootState) => state.modals;
export const getTasksState = (state: RootState) => state.tasks;