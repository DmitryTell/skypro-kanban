import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxQuitStyles } from "./styled";


export const ButtonBoxQuit: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxQuitStyles>
        { children }
    </ButtonBoxQuitStyles>
);