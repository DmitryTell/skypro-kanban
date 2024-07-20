import { FC } from "react";

import { IInputBox } from "./interface";
import { InputBoxAuthStyles } from "./styled";


export const InputBoxAuth: FC<IInputBox> = ({ children }) => (
    <InputBoxAuthStyles>
        { children }
    </InputBoxAuthStyles>
);