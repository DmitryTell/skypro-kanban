import { FC, ReactNode } from 'react';

import * as Styled from './main-layout.styled';


interface IMainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
    const mockTheme = 'normal';

    return (
        <Styled.Wrapper $theme={ mockTheme }>
            { children }
        </Styled.Wrapper>
    );
};
