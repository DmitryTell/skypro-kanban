import styled from "styled-components";


interface ITmemeSwitcherStylesProps {
    $rangeTrackColor: string;
    $rangeThumbColor: string;
}

export const ThemeSwitcherStyles = styled.input<ITmemeSwitcherStylesProps>`
    -webkit-appearance: none;
    width: 24px;
    border-radius: 100px;
    outline: none;
    cursor: pointer;

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 13px;
        background: ${({ $rangeTrackColor }) => ($rangeTrackColor)};
        border-radius: 100px;
    }

    &::-moz-range-track {
        height: 13px;
        background: ${({ $rangeTrackColor }) => ($rangeTrackColor)};
        border-radius: 100px;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: ${({ $rangeThumbColor }) => ($rangeThumbColor)};
    }

    &::-moz-range-thumb {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: ${({ $rangeThumbColor }) => ($rangeThumbColor)};
    }
`;