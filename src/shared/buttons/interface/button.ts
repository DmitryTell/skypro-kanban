import { HTMLProps, ReactNode } from "react";


export interface IButton extends HTMLProps<HTMLButtonElement> {
    $buttonBorderColor?: string;
    $buttonColor?: string;
    type?: "button" | "submit";
    text: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}

export interface IButtonShell extends HTMLProps<HTMLButtonElement> {
    children: ReactNode;
    onClick: React.MouseEventHandler;
}

export interface IButtonShellCategory extends IButtonShell {
    $isActive: boolean;
}