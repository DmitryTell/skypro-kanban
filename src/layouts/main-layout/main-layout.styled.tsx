import styled from 'styled-components';

import { ThemeType } from '@helpers/';


interface IMainLayoutStylesProps {
    $theme: ThemeType;
}

export const Wrapper = styled.main<IMainLayoutStylesProps>`
    position: relative;
    width: 100%;
    padding-top: 40px;
    background: ${({ $theme }) => ($theme === 'normal' ? '#EAEEF6' : '#151419')};
`;
