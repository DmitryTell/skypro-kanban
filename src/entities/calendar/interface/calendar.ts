import { ReactNode } from "react";

import { Theme, IDate } from "@shared/";


export interface ICalendar {
    date: IDate;
    currentTheme: Theme;
    calendarDays: string[][];
    isClickable: boolean;
    currentDay: number;
    activeDay: string;
    selectedDate: string;
    children: ReactNode;
    onClickNextMonth: React.MouseEventHandler;
    onClickPrevMonth: React.MouseEventHandler;
    onClickNewDay: React.MouseEventHandler;
}