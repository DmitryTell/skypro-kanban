import { FC } from "react";

import { IButtonBox } from "./interface";
import { ButtonBoxCreateMobileStyles } from "./styled";


export const ButtonBoxCreateMobile: FC<IButtonBox> = ({ children }) => (
    <ButtonBoxCreateMobileStyles>
        { children }
    </ButtonBoxCreateMobileStyles>
);