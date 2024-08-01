import styled from "styled-components";


interface IHeaderStylesProps {
    $userNameColor?: string;
    $isUserPanel?: boolean;
    $logo?: string;
    $textColor?: string;
}

export const Content = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div<IHeaderStylesProps>`
    & svg path {
        fill: ${({ $logo }) => ($logo)};
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    gap: 20px;
`;

export const UserPanelButton = styled.button<IHeaderStylesProps>`
    background: transparent;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
    color: ${({ $userNameColor }) => ($userNameColor)};
    display: flex;
    align-items: center;
    gap: 10px;

    & svg {
        transform: ${({ $isUserPanel }) => ($isUserPanel ? "rotate(180deg)" : "rotate(0deg)")};
    }

    & svg path {
        fill: ${({ $userNameColor }) => ($userNameColor)};
    }
`;

export const UserPanelContent = styled.div`
    width: 145px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 10px;
`;

export const UserBox = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 4px;
`;

export const UserName = styled.span<IHeaderStylesProps>`
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -1%;
    color: ${({ $textColor }) => ($textColor)};
`;

export const Email = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -1%;
    color: #94A6BE;
`;

export const ThemeBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ThemeName = styled.span<IHeaderStylesProps>`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -1%;
    color: ${({ $textColor }) => ($textColor)};
`;