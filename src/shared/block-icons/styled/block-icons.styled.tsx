import styled from "styled-components";


interface ICategoryIconStylesProps {
    $backgroundColor: string;
    $fontWeight: string;
    $fontColor: string;
}

interface IStatusIconStylesProps {
    $activeTextColor: string;
}

export const CategoryIconTaskStyles = styled.div<ICategoryIconStylesProps>`
    width: 82px;
    height: 20px;
    background: ${({ $backgroundColor }) => ($backgroundColor)};
    border-radius: 18px;
    font-weight: ${({ $fontWeight }) => ($fontWeight)};
    font-size: 10px;
    line-height: 10px;
    color: ${({ $fontColor }) => ($fontColor)};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CategoryIconModalStyles = styled(CategoryIconTaskStyles)`
    width: 115px;
    height: 30px;
    border-radius: 24px;
    font-size: 14px;
    line-height: 14px;
`;

export const StatusIcon = styled.div`
    height: 30px;
    padding: 10px 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    color: rgba(148, 166, 190, 0.4);
`;

export const StatusIconActive = styled(StatusIcon)<IStatusIconStylesProps>`
    background: #94A6BE;
    border: none;
    color: ${({ $activeTextColor }) => ($activeTextColor)};
`;