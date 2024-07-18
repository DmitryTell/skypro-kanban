import styled from "styled-components";

interface IButtonStylesProps {
    $buttonBorderColor?: string;
    $buttonColor?: string;
}

export const ButtonStyles = styled.button`
    width: 100%;
    height: 100%;
    background: #565EEF;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFF;
    transition: all 0.5s;

    &:hover {
        background: #94A6BE;
    }

    &:disabled {
        background: #94A6BE;
    }
`;

export const ButtonTransparentStyles = styled(ButtonStyles)<IButtonStylesProps>`
    background: transparent;
    border: 1px solid ${({ $buttonBorderColor }) => ($buttonBorderColor)};
    line-height: 10px;
    color: ${({ $buttonColor }) => ($buttonColor)};

    &:hover {
        background: #565EEF;
        border: none;
        color: #FFF;
    }
`;
