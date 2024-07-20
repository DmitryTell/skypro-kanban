import styled from "styled-components";


interface ITitleStylesProps {
    $textColor: string;
}

export const TitleAuthStyles = styled.h2<ITitleStylesProps>`
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -3%;
    color: ${({ $textColor }) => ($textColor)};
`;

export const TitleQuitStyles = styled(TitleAuthStyles)`
    letter-spacing: -2%;
`;

export const TitleModalH3Styles = styled.h3<ITitleStylesProps>`
    width: 100%;
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    color: ${({ $textColor }) => ($textColor)};
`;

export const TitleModalH4Styles = styled.h4<ITitleStylesProps>`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${({ $textColor }) => ($textColor)};
`;

export const TitleTasksStyles = styled.h2`
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #94A6BE;
`;