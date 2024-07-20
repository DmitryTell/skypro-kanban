import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxModalSaveStyles } from "./styled";


export const ButtonBoxModalSave: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxModalSaveStyles>
        { children }
    </ButtonBoxModalSaveStyles>
);