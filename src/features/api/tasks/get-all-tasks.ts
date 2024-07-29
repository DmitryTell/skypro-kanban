import { API_BASE_URL } from "@shared/";


export const getAllTasks = async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/kanban`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (response.status === 401) {
        throw new Error("Ошибка авторизации.");
    }

    if (!response.ok) {
        throw new Error("Ошибка соединения. Проверьте подключение к интернету.");
    }

    const data = await response.json();
    return data;
};