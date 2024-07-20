import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxAuthStyles } from "./styled";


export const ButtonBoxAuth: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxAuthStyles>
        { children }
    </ButtonBoxAuthStyles>
);