import { ITask } from "@shared/";


export const filterTasks = (tasks: ITask[], status: string) => [...tasks].filter((task) => task.status === status);