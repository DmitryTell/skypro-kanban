import { API_BASE_URL } from "@shared/";


export const authRegister = async (login: string, name: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/user`, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    });

    if (response.status === 400) {
        throw new Error('Пользователь с таким email уже существует.');
    }

    if (!response.ok) {
        throw new Error('Ошибка соединения. Проверьте подключение к интернету.');
    }

    const data = await response.json();
    return data;
};