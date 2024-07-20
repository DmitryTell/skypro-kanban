import { FC } from "react";

import { IInputBox } from "./interface";
import { InputBoxModalTextareaStyles } from "./styled";


export const InputBoxModalTextarea: FC<IInputBox> = ({ children }) => (
    <InputBoxModalTextareaStyles>
        { children }
    </InputBoxModalTextareaStyles>
);