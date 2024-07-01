import styled from 'styled-components';

import { ThemeType } from '@helpers/';


interface IAuthLayoutStylesProps {
    $theme: ThemeType;
}

export const Wrapper = styled.div<IAuthLayoutStylesProps>`
    width: 100%;
    height: 100%;
    overflow: auto;
    background: ${({ $theme }) => ($theme === 'normal' ? '#EAEEF6' : '#151419')};
`;

export const Container = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;
