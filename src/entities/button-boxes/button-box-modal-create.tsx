import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalCreateStyles } from "./styled";


export const ButtonBoxModalCreate: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalCreateStyles>
        { children }
    </ButtonBoxModalCreateStyles>
);