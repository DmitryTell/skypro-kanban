import { ReactNode } from "react";

import { Theme } from "@shared/";


export interface IFormContainer {
    currentTheme: Theme;
    children: ReactNode;
}