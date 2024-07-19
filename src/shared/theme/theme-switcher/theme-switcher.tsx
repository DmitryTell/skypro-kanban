import { FC, HTMLProps } from "react";

import { ThemeSwitcherStyles } from "./theme-switcher.styled";


interface IThemeSwitcherProps extends HTMLProps<HTMLInputElement> {
    $rangeTrackColor: string;
    $rangeThumbColor: string;
    value: number;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({
    $rangeTrackColor,
    $rangeThumbColor,
    value,
    onChange,
}) => (
    <ThemeSwitcherStyles
        $rangeTrackColor={ $rangeTrackColor }
        $rangeThumbColor={ $rangeThumbColor }
        type="range"
        min={ 0 }
        max={ 1 }
        value={ value }
        onChange={ onChange }
    />
);