import { API_BASE_URL } from "@shared/";


export const createNewTask = async (
    token: string,
    title: string,
    topic: string,
    status: string,
    description: string,
    date: string,
) => {
    const response = await fetch(`${API_BASE_URL}/kanban`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title,
            topic,
            status,
            description,
            date,
        }),
    });

    if (!response.ok) {
        throw new Error("Ошибка получения данных.");
    }

    const data = await response.json();
    return data;
};