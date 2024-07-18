import { FC, HTMLProps } from "react";

import { TextareaStyles } from "./styled";


interface ITextareaProps extends HTMLProps<HTMLTextAreaElement> {
    $color: string;
    $disabledBackground: string;
    value: string;
    placeholder: string;
    disabled: boolean;
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const Textarea: FC<ITextareaProps> = ({
    $color,
    $disabledBackground,
    value,
    placeholder,
    disabled,
    onChange,
}) => (
    <TextareaStyles
        $color={ $color }
        $disabledBackground={ $disabledBackground }
        value={ value }
        placeholder={ placeholder }
        disabled={ disabled }
        onChange={ onChange }
    />
);