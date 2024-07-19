import styled from "styled-components";


interface IWrapperStylesProps {
    $wrapperBackground?: string;
    $headerBackground?: string;
}

export const AuthWrapper = styled.div<IWrapperStylesProps>`
    width: 100%;
    height: 100%;
    overflow: auto;
    background: ${({ $wrapperBackground }) => ($wrapperBackground)};
`;

export const HeaderWrapper = styled.header<IWrapperStylesProps>`
    width: 100%;
    background: ${({ $headerBackground }) => ($headerBackground)};
`;

export const MainWrapper = styled.main<IWrapperStylesProps>`
    position: relative;
    width: 100%;
    padding-top: 40px;
    background: ${({ $wrapperBackground }) => ($wrapperBackground)};
`;

export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 135px;
    padding-right: 135px;

    @media (max-width: 1247px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media (max-width: 585px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export const AuthContainer = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TasksBox = styled.div`
    height: 100vh;
    display: flex;
    gap: 20px;
    overflow: auto;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
      width: 0;
    }

    &::-moz-scrollbar {
      width: 0;
    }

    @media (max-width: 877px) {
      padding-bottom: 160px;
      flex-flow: column;
    }
`;