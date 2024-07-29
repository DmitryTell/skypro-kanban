import { useNavigate } from "react-router-dom";

import {
    useAppSelector,
    useAppDispatch,
    getValuesState,
    setIsLoginError,
    setIsNameError,
    setIsPasswordError,
    setNewError,
    setIsDisabled,
    clearValues,
    useUser,
} from "@features/";
import { authLogin } from "./auth-login";
import { authRegister } from "./auth-register";


export const useSubmitHandlers = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {
        login,
        name,
        password,
    } = useAppSelector(getValuesState);
    const { setNewUserProps } = useUser();

    const handleSubmitLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(setNewError({ isError: false, errorText: "" }));
        dispatch(setIsDisabled({ isDisabled: true }));

        if (!login.trim()) {
            dispatch(setNewError({ isError: true, errorText: "Введите адрес электронной почты." }));
            dispatch(setIsLoginError({ isLoginError: true }));
            return;
        }

        if (!password.trim()) {
            dispatch(setNewError({ isError: true, errorText: "Введите пароль." }));
            dispatch(setIsPasswordError({ isPasswordError: true }));
            return;
        }

        try {
            const data = await authLogin(login, password);

            setNewUserProps(data.user, true);
            navigate("/", { replace: true });
            dispatch(clearValues());
            dispatch(setIsDisabled({ isDisabled: false }));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setNewError({ isError: true, errorText: error.message }));
                dispatch(setIsLoginError({ isLoginError: true }));
                dispatch(setIsPasswordError({ isPasswordError: true }));
            }
        }
    };

    const handleSubmitRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(setNewError({ isError: false, errorText: "" }));
        dispatch(setIsDisabled({ isDisabled: true }));

        if (!login.trim()) {
            dispatch(setNewError({ isError: true, errorText: "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку." }));
            dispatch(setIsLoginError({ isLoginError: true }));
            return;
        }

        if (!name.trim()) {
            dispatch(setNewError({ isError: true, errorText: "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку." }));
            dispatch(setIsNameError({ isNameError: true }));
            return;
        }

        if (!password.trim()) {
            dispatch(setNewError({ isError: true, errorText: "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку." }));
            dispatch(setIsPasswordError({ isPasswordError: true }));
            return;
        }

        if (password.length < 4) {
            dispatch(setNewError({ isError: true, errorText: "Слишком короткий пароль." }));
            dispatch(setIsPasswordError({ isPasswordError: true }));
            return;
        }

        try {
            const data = await authRegister(login, name, password);

            setNewUserProps(data.user, true);
            navigate("/", { replace: true });
            dispatch(clearValues());
            dispatch(setIsDisabled({ isDisabled: false }));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setNewError({ isError: true, errorText: error.message }));
                dispatch(setIsLoginError({ isLoginError: true }));
                dispatch(setIsNameError({ isNameError: true }));
                dispatch(setIsPasswordError({ isPasswordError: true }));
            }
        }
    };

    return {
        handleSubmitLogin,
        handleSubmitRegister,
    };
};