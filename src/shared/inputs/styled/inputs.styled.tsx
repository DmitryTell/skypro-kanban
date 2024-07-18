import styled, { css } from "styled-components";


interface IInputStylesProps {
    $color: string;
    $isError?: boolean;
    $disabledBackground?: string;
}

const inputCssProps = css<IInputStylesProps>`
    width: 100%;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${({ $color }) => ($color)};

    &::placeholder {
        color: #94A6BE;
    }

    &::-webkit-input-placeholder {
        color: #94A6BE;
    }

    &::-moz-placeholder {
        color: #94A6BE;
    }

    &:disabled {
        background: ${({ $disabledBackground }) => ($disabledBackground)};
        border: none;
    }
`;

export const InputAuthStyles = styled.input<IInputStylesProps>`
    ${inputCssProps}
    height: 30px;
    padding: 8px 10px;
    border: 0.7px solid ${({ $isError }) => ($isError ? '#F84D4D' : 'rgba(148, 166, 190, 0.4)')};

    @media (max-width: 877px) {
        height: 40px;
    }
`;

export const InputTaskStyles = styled.input<IInputStylesProps>`
    ${inputCssProps}
    height: 49px;
    padding: 14px;

    @media (max-width: 877px) {
        height: 37px;
        padding: 8px 10px;
    }
`;

export const TextareaStyles = styled.textarea<IInputStylesProps>`
    ${inputCssProps}
    height: 200px;
    font-family: Roboto;
    resize: none;
`;