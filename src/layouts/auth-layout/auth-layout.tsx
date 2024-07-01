import { FC, ReactNode } from 'react';

import * as Styled from './auth-layout.styled';


interface IAuthLayoutProps {
    children: ReactNode;
}

export const AuthLayout: FC<IAuthLayoutProps> = ({ children }) => {
    const mockTheme = 'normal';

    return (
        <Styled.Wrapper $theme={ mockTheme }>
            <Styled.Container>
                { children }
            </Styled.Container>
        </Styled.Wrapper>
    );
};
