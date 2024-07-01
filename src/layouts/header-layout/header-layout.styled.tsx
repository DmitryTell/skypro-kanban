import styled from 'styled-components';

import { ThemeType } from '@helpers/';


interface IHeaderLayoutStylesProps {
    $theme: ThemeType;
}

export const Wrapper = styled.header<IHeaderLayoutStylesProps>`
    width: 100%;
    background: ${({ $theme }) => ($theme === 'normal' ? '#FFF' : '#20202C')};
`;
