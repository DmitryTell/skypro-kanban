import { FC } from "react";

import { LinkStyles } from "./link.styled";


interface ILinkProps {
    $hoverLinkColor: string;
    path: string;
    text: string;
}

export const Link: FC<ILinkProps> = ({
    $hoverLinkColor,
    path,
    text,
}) => (
    <LinkStyles
        $hoverLinkColor={ $hoverLinkColor }
        to={ path }
    >
        { text }
    </LinkStyles>
);