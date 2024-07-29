import { API_BASE_URL } from "@shared/";


export const changeTask = async (
    token: string,
    id: string,
    title: string,
    topic: string,
    status: string,
    description: string,
    date: string,
) => {
    const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
        method: "PUT",
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