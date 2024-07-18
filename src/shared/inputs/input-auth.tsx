import { FC, HTMLProps } from "react";

import { InputAuthStyles } from "./styled";


interface IInputAuthProps extends HTMLProps<HTMLInputElement> {
    $color: string;
    $isError: boolean;
    type: "text" | "email" | "password";
    value: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputAuth: FC<IInputAuthProps> = ({
    $color,
    $isError,
    type,
    value,
    placeholder,
    onChange,
}) => (
    <InputAuthStyles
        $color={ $color }
        $isError={ $isError }
        type={ type }
        value={ value }
        placeholder={ placeholder }
        onChange={ onChange }
    />
);