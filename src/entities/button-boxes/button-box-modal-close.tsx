import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalCloseStyles } from "./styled";


export const ButtonBoxModalClose: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalCloseStyles>
        { children }
    </ButtonBoxModalCloseStyles>
);