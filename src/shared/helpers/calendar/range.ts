export const range = (last: number) => {
    const result = [];

    for (let i = 1; i <= last; i++) {
        result.push(i);
    }

    return result;
};