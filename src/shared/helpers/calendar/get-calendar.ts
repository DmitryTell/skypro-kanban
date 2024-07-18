import { getLastDay } from "./get-last-day";
import { range } from "./range";
import { getFirstWeekDay } from "./get-first-week-day";
import { getLastWeekDay } from "./get-last-week-day";
import { normalize } from "./normalize";


export const getCalendar = (year: number, month: number) => {
    const lastDay = getLastDay(year, month);
    const allDays = range(lastDay);
    const firstWeekDay = getFirstWeekDay(year, month);
    const lastWeekDay = getLastWeekDay(year, month);
    const normalizedDays = normalize(allDays, firstWeekDay, lastWeekDay);
    const result: string[][] = [];

    for (let i = 0; i < 5; i++) {
        const week = [];

        for (let j = i * 7; j < (i + 1) * 7; j++) {
            week.push(normalizedDays[j]);
        }

        result.push(week);
    }

    return result;
};