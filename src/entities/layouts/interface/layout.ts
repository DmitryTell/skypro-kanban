import { ReactNode } from "react";

import { Theme } from "@shared/";


export interface ILayout {
    currentTheme: Theme;
    children: ReactNode;
}