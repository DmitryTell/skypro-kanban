import { FC, ReactNode, useMemo, useState } from "react";

import { ThemeContext } from "./context";
import { THEME_LOCAL_STOREAGE_KEY } from "./lib";
import { Theme } from "@/shared";


interface IThemeProviderProps {
    children: ReactNode;
}

const defaultTheme = localStorage.getItem(THEME_LOCAL_STOREAGE_KEY) as Theme || Theme.normal;

export const ThemeProvider: FC<IThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={ defaultProps }>
            { children }
        </ThemeContext.Provider>
    );
};