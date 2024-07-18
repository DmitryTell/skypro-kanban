import { HTMLProps } from "react";


export interface IButton extends HTMLProps<HTMLButtonElement> {
    $buttonBorderColor?: string;
    $buttonColor?: string;
    type?: "button" | "submit";
    text: string;
    disabled?: boolean;
    onClick?: React.MouseEventHandler;
}