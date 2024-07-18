export const normalize = (days: number[], left: number, right: number) => {
    const result = [];

    for (let i = 1; i < left; i++) {
        result.push('');
    }

    days.forEach((day) => {
        result.push(String(day));
    });

    for (let j = 0; j <= (6 - right); j++) {
        result.push('');
    }

    return result;
};