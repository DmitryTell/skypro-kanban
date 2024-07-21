import { useContext } from "react";

import { IUser } from "@shared/";
import { UserContext } from "./context";
import { USER_LOCAL_STOREAGE_KEY } from "./lib";


interface IUseUserResult {
    user: IUser;
    isAuth: boolean;
    setNewUserProps: (user: IUser, isAuth: boolean) => void;
}

export const useUser = (): IUseUserResult => {
    const {
        user,
        isAuth,
        setUserProps,
    } = useContext(UserContext);

    const setNewUserProps = (user: IUser, isAuth: boolean) => {
        const newProps = { user, isAuth };

        setUserProps(newProps);
        localStorage.setItem(USER_LOCAL_STOREAGE_KEY, JSON.stringify(newProps));
    };

    return {
        user,
        isAuth,
        setNewUserProps,
    };
};