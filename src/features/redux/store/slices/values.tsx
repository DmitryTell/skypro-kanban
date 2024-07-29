import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface IValuesProps {
    login: string;
    name: string;
    password: string;
    isLoginError: boolean;
    isNameError: boolean;
    isPasswordError: boolean;
    isError: boolean;
    errorText: string;
    isDisabled: boolean;
}

const initialState: IValuesProps = {
    login: "",
    name: "",
    password: "",
    isLoginError: false,
    isNameError: false,
    isPasswordError: false,
    isError: false,
    errorText: "",
    isDisabled: false,
};

export const valuesSlice = createSlice({
    name: "values",
    initialState,
    reducers: {
        clearValues(state) {
            state.login = "";
            state.name = "";
            state.password = "";
            state.isLoginError = false;
            state.isNameError = false;
            state.isPasswordError = false;
            state.isError = false;
            state.errorText = "";
            state.isDisabled = false;
        },
        setLogin(state, action: PayloadAction<{ login: string }>) {
            const { login } = action.payload;

            state.login = login;
        },
        setName(state, action: PayloadAction<{ name: string }>) {
            const { name } = action.payload;

            state.name = name;
        },
        setPassword(state, action: PayloadAction<{ password: string }>) {
            const { password } = action.payload;

            state.password = password;
        },
        setIsLoginError(state, action: PayloadAction<{ isLoginError: boolean }>) {
            const { isLoginError } = action.payload;

            state.isLoginError = isLoginError;
        },
        setIsNameError(state, action: PayloadAction<{ isNameError: boolean }>) {
            const { isNameError } = action.payload;

            state.isNameError = isNameError;
        },
        setIsPasswordError(state, action: PayloadAction<{ isPasswordError: boolean }>) {
            const { isPasswordError } = action.payload;

            state.isPasswordError = isPasswordError;
        },
        setNewError(state, action: PayloadAction<{ isError: boolean; errorText: string }>) {
            const { isError, errorText} = action.payload;

            state.isError = isError;
            state.errorText = errorText;
        },
        setIsDisabled(state, action: PayloadAction<{ isDisabled: boolean }>) {
            const { isDisabled } = action.payload;

            state.isDisabled = isDisabled;
        },
    },
});

export const {
    clearValues,
    setLogin,
    setName,
    setPassword,
    setIsLoginError,
    setIsNameError,
    setIsPasswordError,
    setNewError,
    setIsDisabled,
} = valuesSlice.actions;