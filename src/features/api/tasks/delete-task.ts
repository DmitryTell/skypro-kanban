import { API_BASE_URL } from "@shared/";


export const deleteTask = async (token: string, id: string) => {
    const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка получения данных.");
    }

    const data = await response.json();
    return data;
};