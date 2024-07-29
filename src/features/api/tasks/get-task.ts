import { API_BASE_URL } from "@shared/";


export const getTask = async (token: string, id: string) => {
    const response = await fetch(`${API_BASE_URL}/kanban/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.status === 404) {
        throw new Error("Такая задача отсутствует.");
    }

    if (!response.ok) {
        throw new Error("Ошибка соединения. Проверьте подключение к интернету.");
    }

    const data = await response.json();
    return data;
};