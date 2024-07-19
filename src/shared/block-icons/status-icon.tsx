import { FC } from "react";

import { IStatus } from "./interfaces";
import * as Styled from "./styled";


export const StatusIcon: FC<IStatus> = ({
    $activeTextColor,
    text,
    isActive,
}) => isActive ? (
    <Styled.StatusIconActive $activeTextColor={ $activeTextColor }>
        { text }
    </Styled.StatusIconActive>
) : (
    <Styled.StatusIcon>{ text }</Styled.StatusIcon>
);