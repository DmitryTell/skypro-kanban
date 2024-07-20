import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalCancelStyles } from "./styled";


export const ButtonBoxModalCancel: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalCancelStyles>
        { children }
    </ButtonBoxModalCancelStyles>
);