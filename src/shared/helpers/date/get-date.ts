import { addZeroBefore } from "./add-zero-before";


export const getDate = (date: Date) => {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${addZeroBefore(day)}.${addZeroBefore(month + 1)}.${String(year)[2]}${String(year)[3]}`;
};