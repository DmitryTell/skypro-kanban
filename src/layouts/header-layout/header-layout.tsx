import { FC, ReactNode } from 'react';

import * as Styled from './header-layout.styled';


interface IHeaderLayoutProps {
    children: ReactNode;
}

export const HeaderLayout: FC<IHeaderLayoutProps> = ({ children }) => {
    const mockTheme = 'normal';

    return (
        <Styled.Wrapper $theme={ mockTheme }>
            { children }
        </Styled.Wrapper>
    );
};
