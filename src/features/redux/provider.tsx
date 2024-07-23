import { FC, ReactNode } from "react";
import { Provider } from "react-redux";

import { store } from "./store";


interface IStoreProviderProps {
    children: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ children }) => (
    <Provider store={ store }>
        { children }
    </Provider>
);