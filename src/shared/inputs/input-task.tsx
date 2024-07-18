import { FC, HTMLProps } from "react";

import { InputTaskStyles } from "./styled";


interface IInputTaskProps extends HTMLProps<HTMLInputElement> {
    $color: string;
    $disabledBackground?: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputTask: FC<IInputTaskProps> = ({
    $color,
    $disabledBackground,
    value,
    placeholder,
    disabled,
    onChange,
}) => (
    <InputTaskStyles
        $color={ $color }
        $disabledBackground={ $disabledBackground }
        type="text"
        value={ value }
        placeholder={ placeholder }
        disabled={ disabled }
        onChange={ onChange }
    />
);