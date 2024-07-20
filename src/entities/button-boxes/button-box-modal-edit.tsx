import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalEditStyles } from "./styled";


export const ButtonBoxModalEdit: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalEditStyles>
        { children }
    </ButtonBoxModalEditStyles>
);