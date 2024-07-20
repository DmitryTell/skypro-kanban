import { FC } from "react";

import { IButtonShell } from "./interface";
import { ButtonShellStyles } from "./styled";


export const ButtonShell: FC<IButtonShell> = ({
    children,
    onClick,
}) => (
    <ButtonShellStyles
        type="button"
        onClick={ onClick }
    >
        { children }
    </ButtonShellStyles>
);