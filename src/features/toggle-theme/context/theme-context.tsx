import { createContext } from "react";

import { Theme } from "@shared/";


interface IThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<IThemeContextProps>({
    theme: Theme.normal,
    setTheme: () => {},
});