import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxUserPanelStyles } from "./styled";


export const ButtonBoxUserPanel: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxUserPanelStyles>
        { children }
    </ButtonBoxUserPanelStyles>
);