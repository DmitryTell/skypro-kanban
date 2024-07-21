import { useContext } from "react";

import { Theme } from "@shared/";
import { ThemeContext } from "./context";
import { THEME_LOCAL_STOREAGE_KEY } from "./lib";


interface IUseThemeResult {
    theme: Theme;
    toggleTheme: () => void;
}

export const useTheme = (): IUseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.dark ? Theme.normal : Theme.dark;

        setTheme(newTheme);
        localStorage.setItem(THEME_LOCAL_STOREAGE_KEY, newTheme);
    };

    return { theme, toggleTheme };
};