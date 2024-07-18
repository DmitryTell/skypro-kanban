import { FC } from "react";

import { IButton } from "./interface";
import { ButtonStyles } from "./styled";


export const Button: FC<IButton> = ({
    type,
    text,
    disabled,
    onClick,
}) => (
    <ButtonStyles type={ type } disabled={ disabled } onClick={ onClick }>
        { text }
    </ButtonStyles>
);