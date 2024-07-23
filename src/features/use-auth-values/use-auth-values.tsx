import { useState } from "react";


export const useAuthValues = () => {
    const [login, setLogin] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loginError, setLoginError] = useState<boolean>(false);
    const [nameError, setNameError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(false);

    const handleSetLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    };

    const handleSetName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const setNewLoginError = (newError: boolean) => {
        setLoginError(newError);
    };

    const setNewNameError = (newError: boolean) => {
        setNameError(newError);
    };

    const setNewPasswordError = (newError: boolean) => {
        setPasswordError(newError);
    };

    const setNewErrorStatus = (newStatus: boolean) => {
        setIsError(newStatus);
    };

    const setNewErrorText = (newErrorText: string) => {
        setErrorText(newErrorText);
    };

    const setNewDisabledStatus = (newStatus: boolean) => {
        setDisabled(newStatus);
    };

    return {
        login,
        name,
        password,
        loginError,
        nameError,
        passwordError,
        isError,
        errorText,
        disabled,
        handleSetLogin,
        handleSetName,
        handleSetPassword,
        setNewLoginError,
        setNewNameError,
        setNewPasswordError,
        setNewErrorStatus,
        setNewErrorText,
        setNewDisabledStatus,
    };
};