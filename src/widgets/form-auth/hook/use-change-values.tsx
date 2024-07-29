import { useEffect } from "react";

import {
    useAppDispatch,
    setLogin,
    setName,
    setPassword,
    setIsLoginError,
    setIsNameError,
    setIsPasswordError,
    setIsDisabled,
    clearValues,
} from "@features/";


export const useChangeValues = () => {
    const dispatch = useAppDispatch();

    const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setLogin({ login: e.target.value }));
        dispatch(setIsDisabled({ isDisabled: false }));
        dispatch(setIsLoginError({ isLoginError: false }));
    };

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName({ name: e.target.value }));
        dispatch(setIsDisabled({ isDisabled: false }));
        dispatch(setIsNameError({ isNameError: false }));
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword({ password: e.target.value }));
        dispatch(setIsDisabled({ isDisabled: false }));
        dispatch(setIsPasswordError({ isPasswordError: false }));
    };

    useEffect(() => {
        dispatch(clearValues());
    }, []);

    return {
        handleChangeLogin,
        handleChangeName,
        handleChangePassword,
    };
};