import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxCreateStyles } from "./styled";


export const ButtonBoxCreate: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxCreateStyles>
        { children }
    </ButtonBoxCreateStyles>
);