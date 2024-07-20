import { FC } from "react";

import { IButtonShellCategory } from "./interface";
import { ButtonShellCategoryStyles } from "./styled";


export const ButtonShellCategory: FC<IButtonShellCategory> = ({
    $isActive,
    children,
    onClick,
}) => (
    <ButtonShellCategoryStyles
        $isActive={ $isActive }
        type="button"
        onClick={ onClick }
    >
        { children }
    </ButtonShellCategoryStyles>
);