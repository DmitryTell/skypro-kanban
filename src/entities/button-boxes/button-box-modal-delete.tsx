import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalDeleteStyles } from "./styled";


export const ButtonBoxModalDelete: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalDeleteStyles>
        { children }
    </ButtonBoxModalDeleteStyles>
);