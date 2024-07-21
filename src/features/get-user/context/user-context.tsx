import { createContext } from "react";

import { IUser } from "@shared/";


interface IUserContextProps {
    user: IUser;
    isAuth: boolean;
    setUserProps: ({ user, isAuth }: { user: IUser; isAuth: boolean }) => void;
}

export const defaultUserProps: IUser = {
    _id: "",
    imageUrl: "",
    login: "",
    name: "",
    password: "",
    token: "",
};

export const UserContext = createContext<IUserContextProps>({
    user: defaultUserProps,
    isAuth: false,
    setUserProps: () => {},
});