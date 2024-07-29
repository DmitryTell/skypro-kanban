import { API_BASE_URL } from "@shared/";


export const authLogin = async (login: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        }),
    });

    if (response.status === 400) {
        throw new Error('Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.');
    }

    if (!response.ok) {
        throw new Error('Ошибка соединения. Проверьте подключение к интернету.');
    }

    const data = await response.json();
    return data;
};