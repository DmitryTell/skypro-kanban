import { FC, ReactNode, useMemo, useState } from "react";

import { IUser } from "@shared/";
import { UserContext, defaultUserProps } from "./context";
import { USER_LOCAL_STOREAGE_KEY } from "./lib";


interface IUserProviderProps {
    children: ReactNode;
}

const savedUserProps = localStorage.getItem(USER_LOCAL_STOREAGE_KEY);
const newDefaultUserProps = savedUserProps 
    ? JSON.parse(savedUserProps) as { user: IUser; isAuth: boolean }
    : { user: defaultUserProps, isAuth: false };

export const UserProvider: FC<IUserProviderProps> = ({ children }) => {
    const [
        userProps,
        setUserProps,
    ] = useState<{ user: IUser; isAuth: boolean }>(newDefaultUserProps);

    const defaultProps = useMemo(() => ({
        ...userProps,
        setUserProps,
    }), [userProps]);

    return (
        <UserContext.Provider value={ defaultProps }>
            { children }
        </UserContext.Provider>
    );
};