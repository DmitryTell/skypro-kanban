import { FC } from "react";

import { IButton } from "./interface";
import { ButtonTransparentStyles } from "./styled";


export const ButtonTransparent: FC<IButton> = ({
    $buttonBorderColor,
    $buttonColor,
    text,
    onClick,
}) => (
    <ButtonTransparentStyles
        $buttonBorderColor={ $buttonBorderColor }
        $buttonColor={ $buttonColor }
        type="button"
        onClick={ onClick }
    >
        { text }
    </ButtonTransparentStyles>
);