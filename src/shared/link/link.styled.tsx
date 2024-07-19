import styled from "styled-components";
import { Link } from "react-router-dom";


interface ILinkStylesProps {
    $hoverLinkColor: string;
}

export const LinkStyles = styled(Link)<ILinkStylesProps>`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: rgba(148, 166, 190, 0.4);
    transition: all 0.5s;

    &:hover {
        text-decoration: none;
        color: ${({ $hoverLinkColor }) => ($hoverLinkColor)};
    }
`;