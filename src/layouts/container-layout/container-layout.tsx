import { FC, ReactNode } from 'react';

import * as Styled from './container-layout.styled';


interface IContainerLayoutProps {
    children: ReactNode;
}

export const ContainerLayout: FC<IContainerLayoutProps> = ({ children }) => (
    <Styled.Container>
        { children }
    </Styled.Container>
);
