import { FC } from "react";

import { IInputBox } from "./interface";
import { InputBoxModalStyles } from "./styled";


export const InputBoxModal: FC<IInputBox> = ({ children }) => (
    <InputBoxModalStyles>
        { children }
    </InputBoxModalStyles>
);